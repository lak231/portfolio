import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.css';

import image from '../../img/logo.png';

export default class Logo extends Component{
    constructor(props) {
        super(props);

        this.state = {
            size: {height: this.props.size},
            link: this.props.link
        }
    }

    render() {
        return (
            <Link to={this.state.link}>
                <img src={image} alt='logo' style={this.state.size}/>
            </Link>
        )
    }
}

Logo.propTypes = {
    size: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};