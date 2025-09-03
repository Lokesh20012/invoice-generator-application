package com.lokesh.QuickInvoice.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.lokesh.QuickInvoice.entity.Invoice;
import com.lokesh.QuickInvoice.service.InvoiceService;

import lombok.RequiredArgsConstructor;

@RestController 

@RequestMapping("/api/invoices")
@CrossOrigin(origins = "http://localhost:5173")
public class InvoiceController {
    
	private final InvoiceService invoiceService;
	public InvoiceController(InvoiceService invoiceService) {
		this.invoiceService = invoiceService;
	}
	
	@PostMapping("/")
	public ResponseEntity<Invoice>  saveInvoice(@RequestBody Invoice invoice){
		return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
	}
	
	@GetMapping()
	public ResponseEntity<List<Invoice>> fetchInvoices(){
		return ResponseEntity.ok(invoiceService.fetchInvoice());
		
	}

	@DeleteMapping("/{id}")
    public ResponseEntity<String> deleteInvoice(@PathVariable String id) {
	invoiceService.deleteInvoice(id);
	    return ResponseEntity.noContent().build();
	    }
}
