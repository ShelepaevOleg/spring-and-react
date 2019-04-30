import React from 'react';

const BookListItem = props => (
    <tr className={'book-tr'}>
        <td>{props.book.get("id")}</td>
        <td>{props.book.get("title")}</td>
        <td>{props.book.get("year")}</td>
    </tr>
);
export default BookListItem;