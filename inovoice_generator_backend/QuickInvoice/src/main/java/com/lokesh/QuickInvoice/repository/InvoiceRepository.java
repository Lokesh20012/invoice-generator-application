package com.lokesh.QuickInvoice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lokesh.QuickInvoice.entity.Invoice;

public interface InvoiceRepository extends MongoRepository<Invoice,String>{

}
