import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Welcome__Button extends Component {

    render() {
        return (
            <div className='Welcome__Button'>
                <a>{this.props.text}. </a>
            </div>
        )
    }
}

Welcome__Button.propTypes = {
    text: PropTypes.string.isRequired
};