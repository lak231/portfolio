import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class WelcomeText extends Component {

    render() {
        return (
            <div className='WelcomeText'>
                <p>{this.props.text} </p>
            </div>
        )
    }
}

WelcomeText.propTypes = {
    text: PropTypes.string.isRequired
};