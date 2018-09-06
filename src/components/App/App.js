import React, {Component} from 'react';
import Welcome from '../Welcome/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                    </Switch>
                </div>
            </Router>
        )
    }
}