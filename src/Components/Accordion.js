import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setactiveIndex] = useState(null);


const ontitleClick = (index) =>{
    setactiveIndex(index);
}
   
    const renderitem = items.map((newitem, index) =>{

        const active = index === activeIndex ? 'active': '';
      
         return (
        <React.Fragment key={newitem.title}>
            <div 
            className={`title ${active}`}
            onClick={() => ontitleClick(index)}
            >
                <i className="dropdown icon"></i>
                <h1>{newitem.title}</h1>
            </div>
            <div className={`content ${active}`}>
          <p>{newitem.content}</p>

            </div>
        </React.Fragment>
        );
    });
return <div className="ui styled accordion">
    {renderitem}

    </div>
}
export default Accordion;