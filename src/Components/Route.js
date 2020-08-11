// the children props pass to route here is unique because we will provide one jsx inside another and element inside it becomes children
import React, {useEffect, useState} from 'react';
const Route = ({path, children}) =>{
    const [currentpath, setCurrentPathe] = useState(window.location.pathname);
       

    useEffect(() =>{
        const OnlocationChange = () =>{
            setCurrentPathe(window.location.pathname);
        }
        window.addEventListener('popstate', OnlocationChange);
        return () =>{
            window.removeEventListener('popstate', OnlocationChange)
        }
     }, [])
return currentpath === path ? children : null;

}
export default Route;
