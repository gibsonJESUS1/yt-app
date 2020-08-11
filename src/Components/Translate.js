import React,{useState} from 'react';
import DropDown from './DropDown';
import Convert from './Convert';



const options = [

    {
        label: 'Yoruba',
        value: 'yo'
    },
    {
        label: 'Igbo',
        value: 'ig'
 
    },
    {
        label: 'afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }

]

const Translate = () =>{
    const [languguage, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
    <div>
        <div className="ui form">
            <div className="filed">
                <label>Enter Text</label>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
   

     <DropDown 
     label= 'Select A Language'
     Option= {options}
      selected= {languguage}
       onselectedChange = {setLanguage} 
     />
     <hr />
     <h3 className="ui header">Output</h3>
        <Convert text={text} language={languguage} />
    </div>
    );
}
export default Translate;