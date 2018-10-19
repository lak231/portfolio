import React, {Component} from 'react';
import Welcome from '../Welcome';
import Home from '../Home';
import About from '../About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import UIkit from 'uikit';
import Nav from "../Nav";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/home' component={Home} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }
}