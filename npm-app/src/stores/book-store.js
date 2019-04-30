import { action, autorun, observable, computed } from 'mobx';

/* api */
import {
    BookApi
} from "../services";

class Book {
    @observable book = observable.map();

    constructor(bookData = {}) {
        this.book.merge(bookData);
    }
}

/**
 * Хранилище для книг
 */
class BookStore {
    @observable books;

    constructor() {
        this.books = [];
        this.fetch();
    }

    fetch() {
        BookApi.fetchAll()
            .then(res => {
                this.putBooks(res.data);
            });
    }

    @action putBooks(books) {
        let bookArray = [];
        books.forEach(book => {
            bookArray.push(new Book(book));
        });
        this.books = bookArray;
    }

    getBooks() {
        return this.books;
    }
}
const bookStore = new BookStore();
export default bookStore;

autorun(() => {
    console.log(bookStore.getBooks().toJS());
});

export { BookStore };