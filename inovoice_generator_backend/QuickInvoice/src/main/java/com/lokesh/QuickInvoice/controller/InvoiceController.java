package com.lokesh.QuickInvoice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lokesh.QuickInvoice.entity.Invoice;
import com.lokesh.QuickInvoice.service.InvoiceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
public class InvoiceController {

	private final InvoiceService invoiceService;
	
	public ResponseEntity<Invoice>  saveInvoice(Invoice invoice){
		return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
	}
	
	
	
	

}
