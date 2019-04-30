import {http} from './http';

/**
 * Сервис для работы с API книг
 */
export default class BookAPI {

    /**
     * Возвращает все книги
     * @returns {AxiosPromise<any>}
     */
    static fetchAll(data) {
        return http.get('/books', data);
    }
}