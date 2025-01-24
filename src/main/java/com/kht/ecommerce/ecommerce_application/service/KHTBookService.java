package com.kht.ecommerce.ecommerce_application.service;

import com.kht.ecommerce.ecommerce_application.dto.KHTBook;

import java.util.List;

public interface KHTBookService {
    List<KHTBook> getAllBooks();

    KHTBook findById(int id);

    void updateBook(KHTBook khtBook);
}
