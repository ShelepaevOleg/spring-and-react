import * as axios  from 'axios';
import * as qs from 'qs';

/**
 * Интерсептор для выполнения http-запросов
 * Будет использоваться для сериализации, обработки ошибок, авторизации
 */
let instance = axios.create({
    paramsSerializer: function (params) {
        return qs.stringify(params, { indices: false })
    }
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

export const http = instance;