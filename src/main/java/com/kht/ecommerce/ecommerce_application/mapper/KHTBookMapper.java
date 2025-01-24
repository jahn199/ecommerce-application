package com.kht.ecommerce.ecommerce_application.mapper;

import com.kht.ecommerce.ecommerce_application.dto.KHTBook;
import com.kht.ecommerce.ecommerce_application.dto.Product;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface KHTBookMapper {
    List<KHTBook> getAllBooks();

    KHTBook findById(int id);

    void updateBook(KHTBook khtBook);
}
