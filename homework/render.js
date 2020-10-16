function render(node,renderAs='dom',path=[]){
    const {name,props,chidren} = node;
    if(renderAs === 'dom'){
        const element = document.createElement(name);
        if(props && props.onclick){
            element.addEventListener('click',props.onclick);
        }
        if(typeof chidren === 'string'){
            element.innerHTML = chidren;
        }else if(Array.isArray(chidren)){
            chidren.forEach((child,i)=>{
                element.appendChild(render(child,renderAs,path.concat(i)))
            })
        }
        return element;
    }else if(renderAs === 'html'){
        let childrenStr = '';
        if(typeof chidren === 'string'){
            childrenStr = children;
        }else{
            childrenStr = chidren.map((child,i)=>{
                return render(child,renderAs,path.concat(i))
            }).join("");
        }
        return `<${name} id='${node-path.join('-')}'>${childrenStr}</${name}>`
    }else if(renderAs === 'rehydrate'){
        if(props && props.onclick){
            document.getElementById(`${node-path.join('-')}`).addEventListener('click',props.onclick);
        }
        if(Array.isArray(chidren)){
            chidren.forEach((child,i)=>{
                render(child,renderAs,path.concat(i));
            })
        }
    }else{
        throw `not supported ${renderAs} type`
    }
}