import React from 'react';
import { observer, inject } from 'mobx-react';

import BookList from './book-list';

const Component = inject('bookStore')(observer(({ bookStore }) => {
    return (
        <div>
            <div>Books</div>
            <BookList books={bookStore.getBooks()}/>
        </div>
    );
}));

Component.displayName = 'BookList';
export default Component;