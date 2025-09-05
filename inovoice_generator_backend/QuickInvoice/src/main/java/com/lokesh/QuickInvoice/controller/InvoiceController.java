package com.lokesh.QuickInvoice.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.lokesh.QuickInvoice.entity.Invoice;
import com.lokesh.QuickInvoice.service.InvoiceService;
import com.lokesh.QuickInvoice.service.EmailService;
import lombok.RequiredArgsConstructor;

@RestController 

@RequestMapping("/api/invoices")
@CrossOrigin(origins = "http://localhost:5173")
public class InvoiceController {
    
	private final EmailService emailService;
	private final InvoiceService invoiceService;
	
	public InvoiceController(InvoiceService invoiceService, EmailService emailService) {
		this.invoiceService = invoiceService;
		this.emailService = emailService;
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
	
	@PostMapping("/sendInvoice")
	public ResponseEntity<?> sendInvoice(@RequestPart("file") MultipartFile file,
			@RequestPart("email") String customerEmail){
		try {
		  emailService.sendInvoiceEmail(customerEmail, file);
		  return ResponseEntity.ok().body("Invoice sent successfully");
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send invoice");
		}
	}
}
