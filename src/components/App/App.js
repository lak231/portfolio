import React, {Component} from 'react';
import Welcome from '../Welcome';
import Home from '../Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/home' component={Home} />
                    </Switch>
                </div>
            </Router>
        )
    }
}