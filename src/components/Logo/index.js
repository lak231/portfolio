import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import image from '../../img/logo.png';

export default class Logo extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={this.props.link}>
                <img data-src={image} width={this.props.size} data-uk-img alt='logo'/>
            </Link>
        )
    }
}

Logo.propTypes = {
    link: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
};