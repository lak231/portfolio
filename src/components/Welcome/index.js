import React, {Component} from 'react';
import Logo from './Welcome__Logo';
import Button from './Welcome__Button';

import logo_URL from '../../img/logo.png';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Logo logo_URL={logo_URL} />
                <Button text='Welcome'/>
            </div>
        )
    }
}