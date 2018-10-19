import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../Logo/index';



export default class Nav extends Component {
    state = {
        route: 'home'};

    handleNavClick = (e) => {
        let temp = e.target.innerHTML;
        this.setState(() => ({route: temp}));
        console.log(this.state.route);
    };


    render () {

        return (
            <div className='uk-width-1-1'>
                <div className='uk-visible@l uk-container uk-position-bottom-right uk-flex uk-flex-column uk-text-center uk-margin-large-right uk-margin-large-bottom'>
                    <Logo link='/home' size='100px'/>
                    <ul className="uk-nav">
                        <li>
                            <NavLink activeClassName='NavLink-active' onClick={this.handleNavClick} to='/web'>web</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='NavLink-active' onClick={this.handleNavClick}
                                     to='/data_viz'>data_viz</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='NavLink-active' onClick={this.handleNavClick}
                                     to='/about'>about</NavLink>
                        </li>
                    </ul>
                </div>


                <div className="uk-hidden@l uk-position-fixed uk-position-z-index">

                    <nav className="uk-navbar-container uk-width-1-1" data-uk-navbar="dropbar: true; dropbar-mode: push">
                    </nav>

                    <div className="uk-navbar-dropbar"></div>

                </div>
            </div>
        )
    }
}