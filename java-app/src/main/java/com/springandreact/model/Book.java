package com.springandreact.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Модельный класс "Книга"
 */
@Data
@Entity
@Table(name = "book")
public class Book {

    /**
     * Уникальный идентификатор
     */
    @Id
    @GeneratedValue(generator = "book_generator")
    @SequenceGenerator(
            name = "book_generator",
            sequenceName = "book_sequence",
            initialValue = 1
    )
    @Column(name="id", updatable=false, nullable=false)
    private Long id;

    /**
     * Заголовок
     */
    @Column(columnDefinition = "title", nullable=false)
    private String title;

    /**
     * Год издания
     */
    @Column(columnDefinition = "year", nullable=true)
    private Integer year;
}
