import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.css';

export default class Button extends Component {

    render() {
        return (
            <div className='Button'>
                <a>{this.props.text}. </a>
            </div>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};