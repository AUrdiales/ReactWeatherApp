import React from 'react';
import {Link, NavLink} from 'react-router-dom';

var Nav = (props) => {
    return(
        <div>
            <nav>
                <div className="nav-wrapper  grey lighten-1">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
                        <li><NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
        );
}

module.exports = Nav;