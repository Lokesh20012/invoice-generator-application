package com.lokesh.QuickInvoice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class QuickInvoiceApplication {
    
	public static void main(String[] args) {
		SpringApplication.run(QuickInvoiceApplication.class, args);
		
	}

}
