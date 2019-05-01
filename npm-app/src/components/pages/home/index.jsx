import React from 'react';

/* components */
import {
    BookList
} from "../../commons";

/**
 * Главная страница
 */
const Component = props => {
    return (
        <div>
            <BookList />
        </div>
    );
};

Component.displayName = 'Home';
export default Component;