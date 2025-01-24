package com.kht.ecommerce.ecommerce_application.service;

import com.kht.ecommerce.ecommerce_application.dto.KHTBook;
import com.kht.ecommerce.ecommerce_application.mapper.KHTBookMapper;
import com.kht.ecommerce.ecommerce_application.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KHTBookServiceImpl implements KHTBookService{

    @Autowired
    KHTBookMapper khtBookMapper;

    @Override
    public List<KHTBook> getAllBooks() {
        return khtBookMapper.getAllBooks();
    }

    @Override
    public KHTBook findById(int id) {
        return khtBookMapper.findById(id);
    }

    @Override
    public void updateBook(KHTBook khtBook) {
        khtBookMapper.updateBook(khtBook);
    }
}
