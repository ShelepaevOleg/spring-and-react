import React from 'react';

/* components */
import BookListItem from './book-list-item';

/* styles */
import style from './styles.css';

const BookList = props => {
    return (
        <table className={'book-table'}>
            {props.books.map(bookStore => {
                return (
                    <BookListItem
                        key={bookStore.book.get('id')}
                        book={bookStore.book}
                    />);
            })}
        </table>
    );
};

export default BookList;