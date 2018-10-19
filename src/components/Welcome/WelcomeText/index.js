import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function WelcomeText(props) {
    return (
        <div className='WelcomeText'>
            <p>{props.text} </p>
        </div>
    )
}

WelcomeText.propTypes = {
    text: PropTypes.string.isRequired
};