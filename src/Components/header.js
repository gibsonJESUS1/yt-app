import React from 'react';
import Links from './Link';

const Header = () =>{

    return (
        <div className="ui secondary pointing menu">
            <Links href="/" className="item">
                Accordion
            </Links>

            <Links href="/list" className="item">
                Search
            </Links>
            <Links href="/translator" className="item">
                Translator
            </Links>
            <Links href="/dropdown" className="item">
                Dropdown
            </Links>
        </div>
    )
}
export default Header;