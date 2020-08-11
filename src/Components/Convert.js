import React, {useState, useEffect} from 'react';
import axios from 'axios';


//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Convert = ({text, language}) =>{
    const [translated, setTranslated] = useState('');
    const [debouncetext, setDebouncetext] = useState(text);

    useEffect(() =>{
        const timeId = setTimeout(() =>{
            setDebouncetext(text);
        }, 500)

        return () =>{
            clearTimeout(timeId )
        }
    },[text])
useEffect(() =>{
    
    const doTranslation  = async ()=> {
       const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params:{
                q: debouncetext,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        });
setTranslated(data.data.translations[0].translatedText);


    }
    doTranslation();
}, [debouncetext, language])

    return (
        <div className="ui header">
            {translated}
        </div>

    );
}
export default Convert;