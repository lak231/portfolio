import React, {Component} from 'react';
import Welcome from '../Welcome';
import Work from '../Work';
import About from '../About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import UIkit from 'uikit';
import Nav from "../Nav";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/work' render={() =>
                        <div>
                            <Work/>
                            <Nav/>
                        </div>}
                    />
                    <Route path='/about' render={() =>
                        <div>
                            <About/>
                            <Nav/>
                        </div>}/>
                </Switch>
            </Router>

        )
    }
}