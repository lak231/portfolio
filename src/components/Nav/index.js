import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../Logo/index';



export default function Nav(props) {
    return (
        <div className='uk-position-fixed uk-container uk-position-bottom-right uk-flex uk-flex-column uk-text-center uk-margin-large-right uk-margin-large-bottom'>
            <Logo link='/work' size='100px'/>
            <ul className="uk-nav">
                <li>
                    <NavLink activeClassName='NavLink-active' to='/work'> work </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='NavLink-active' to='/about'> about </NavLink>
                </li>
            </ul>
        </div>
    )
}