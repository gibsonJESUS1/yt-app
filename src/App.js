import React, {useState} from 'react';
import Accordion from './Components/Accordion'
import DropDown from './Components/DropDown';
import Tranlate from './Components/Translate';
import Route from './Components/Route';
import Search from './Components/Search';
import Header from './Components/header';

const Items = [
    {
       title: 'what is React',
       content: 'React is a frontend javascript framework' 
    },
    {
        title: 'why use react?',
        content: 'react is favorite js library among engineers'
    },
    {
        title: 'how do you use react',
        content: 'we use react by creating component'
    }
]
const Options = [
    {
       label: 'Red',
       value: 'red' 
    },
    {
        label: 'Blue',
        value: 'blue'
    },
    {
        label: 'Green',
        value: 'green'
    }
]

export default () =>{
    const [selected, setSelected] = useState(Options[0])
    const [showdropDown, setshowdropDown] = useState(true);

    return (
    <div> 
        <Header />
        <Route path='/'>
        <Accordion items = {Items} />
        </Route>

        <Route path='/list'>
        <Search />
        </Route>

        <Route path='/translator'>
        <Tranlate />
        </Route> 

        <Route path='/dropdown'>
        <DropDown 
        
        selected ={selected}
         onselectedChange={setSelected} 
         Option = {Options}
        />
        </Route> 
  </div>
         );
}