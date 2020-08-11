import React, {useState, useEffect,useRef} from 'react';

const DropDown = ({Option, label, selected, onselectedChange}) => {
    const [open, setOpen]= useState(false);
   
    const ref = useRef();
  
    const renderOptions = Option.map((option) =>{
        if(option.value === selected.value){
            return null
        }
        return (
        <div 
       
        key={option.value}
         onClick={() => onselectedChange(option)} 
         className="item">
            
            {option.label}

        </div>
        );
    })
 
     useEffect(() => {
        const onBodyClick = (event) => {
                if(ref.current.contains(event.target)){
                    return;
                }
                 setOpen(false);
             }
        
        document.body.addEventListener('click', onBodyClick)

        return ()=>{
            document.body.removeEventListener('click', onBodyClick)
        }
     }, [])

    return (
        
        <div ref={ref} className ="ui form">
            <div className="field">
    <label className="label">{label}</label>
            <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                <i className="dropdown icon"></i>
           <div className="text">Select A {selected.label}</div>
                <div className={`menu ${open ? 'visible transition' : ''}`}>
                    {renderOptions}
                </div>
            </div>
            </div>
        </div>
    )
}
export default DropDown;