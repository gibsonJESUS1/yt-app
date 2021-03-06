import React from 'react'

const Links = ({className, href, children}) =>{
 
    const onClicklinks = (event) =>{
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return <a onClick={onClicklinks} className={className} href={href}>
        {children}
        </a>
}

export default Links;