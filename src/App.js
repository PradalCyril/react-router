import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import History from './History';


class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
              <Switch>
                
                <Route exact path="/" component={Home} />
                <Route path="/history" component={History} />
                
              </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;

