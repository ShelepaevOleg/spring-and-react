import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';

/* components */
import Home from '../home';
import Login from '../login';

/**
 * Меню
 */
export default class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>

                    <Route exact path="/" component={Home} />

                    <Route path="/login" component={Login} />

                    <Route
                        exact
                        path="/**"
                        render={() => (
                            <Redirect to="/" />
                        )}
                    />

                </Switch>
            </React.Fragment>
        );
    }
}