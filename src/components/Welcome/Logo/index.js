import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Logo extends Component {
    render() {
        return (
            <div className='Logo'>
                <img src={this.props.logo_URL} alt='logo'/>
            </div>
        )
    }
}

Logo.propTypes = {
    logo_URL: PropTypes.string.isRequired
};