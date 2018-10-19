import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import image from '../../img/logo.png';

export default function Logo(props){
    return (
        <Link to={props.link}>
            <img data-src={image} width={props.size} data-uk-img alt='logo'/>
        </Link>
    )
}

Logo.propTypes = {
    link: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
};