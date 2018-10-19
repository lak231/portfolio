import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default class WorkEntry extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p className='WorkEntry-Title'>
                    <a style={{'textDecoration': 'underline'}} href={this.props.link}>link</a> / {this.props.position} / {this.props.time} / <b>{this.props.title.toUpperCase()}</b>
                </p>
                <p className='WorkEntry-Description'>
                    {this.props.description}
                </p>
            </div>
        )
    }
}

WorkEntry.propTypes = {
    description: PropTypes.string,
    position: PropTypes.string.isRequired,
    link: PropTypes.string,
    imageID: PropTypes.string,
    imageURL: PropTypes.string,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}