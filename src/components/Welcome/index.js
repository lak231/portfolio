import React, {Component} from 'react';
import Logo from '../Logo';
import Text from './WelcomeText';

export default class Welcome extends Component {
    render() {
        return (
            <div data-uk-height-viewport className='uk-section uk-section-small uk-flex uk-flex-middle uk-text-center'>
                <div className='uk-container uk-container-expand'>
                    <Logo link='/home' size='250px' />
                    <Text text='welcome.'/>
                </div>
            </div>
        )
    }
}