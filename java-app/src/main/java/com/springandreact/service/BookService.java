package com.springandreact.service;

import com.springandreact.model.Book;

import java.util.List;

/**
 * Сервис для работы с {@link Book}
 */
public interface BookService {

    /**
     * Возвращает все книги
     * @return все книги
     */
    List<Book> findAll();
}
