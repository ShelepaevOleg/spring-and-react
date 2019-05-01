import React from 'react'
import {Link} from "react-router-dom";

/* styles */
import style from './style.css';

/**
 * Header
 */
const Component = () => {
    return (
        <div id="header">
            <ul id="primary-menu">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    );
};

Component.displayName = 'Header';
export default Component;