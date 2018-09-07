import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../Logo';

import './style.css';


export default function Nav() {
    return (
        <div className='Nav'>
            <ul>
                <li>
                    <Logo link='/home' size='25vh'/>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/web'>web</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/data_viz'>data viz</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/photo'>photo</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/about'>about</NavLink>
                </li>
            </ul>
        </div>
    )
}