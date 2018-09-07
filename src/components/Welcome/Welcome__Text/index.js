import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Welcome__Text extends Component {

    render() {
        return (
            <div className='Welcome__Text'>
                <p>{this.props.text} </p>
            </div>
        )
    }
}

Welcome__Text.propTypes = {
    text: PropTypes.string.isRequired
};