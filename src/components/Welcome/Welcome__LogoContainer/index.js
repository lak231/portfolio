import React, {Component} from 'react';

import Logo from '../../Logo';

import './style.css';

export default class Welcome__LogoContainer extends Component {
    render() {
        return (
            <div className='Welcome__LogoContainer'>
                <Logo size='25vh' link='/home'/>
            </div>
        )
    }
}