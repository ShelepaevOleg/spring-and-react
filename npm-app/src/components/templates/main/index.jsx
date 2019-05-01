import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';

/* pages */
import {Home, Login} from "../../pages";

/* styles */
import style from './style.css';

/**
 * Main
 */
export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="main">
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
                </div>
            </React.Fragment>
        );
    }
}