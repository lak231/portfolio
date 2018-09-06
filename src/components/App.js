import React, {Component} from 'react';
import Logo from './Welcome/Logo';
import Button from './Welcome/Button';

import LOGO_URL from '../img/logo.png';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Logo logo_URL={LOGO_URL}/>
                <Button text='Welcome'/>
            </div>
        )
    }
}