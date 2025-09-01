package com.lokesh.QuickInvoice.service;

import org.springframework.stereotype.Service;

import com.lokesh.QuickInvoice.entity.Invoice;
import com.lokesh.QuickInvoice.repository.InvoiceRepository;

import lombok.RequiredArgsConstructor;


@Service
public class InvoiceService {
    
    private final InvoiceRepository invoiceRepository;
    public InvoiceService(InvoiceRepository invoiceRepository) {
        this.invoiceRepository= invoiceRepository;
    }


    public Invoice saveInvoice(Invoice invoice) {
        return invoiceRepository.save(invoice);
    }
	

}
