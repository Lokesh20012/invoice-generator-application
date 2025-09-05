package com.lokesh.QuickInvoice.service;

import java.io.IOException;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
  
	private final JavaMailSender mailSender;
	public EmailService(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}
	 @Value("${spring.mail.properties.mail.smtp.from}")
	 private String fromEmail;
	
	public void sendInvoiceEmail(String toEmail, MultipartFile file) throws MessagingException, IOException{
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true);
		
		helper.setFrom(fromEmail);
		helper.setTo(toEmail);
		helper.setSubject("Your Invoice");
		helper.setText("Dear Customer,\n\n Please find your attached Invoice,\n\n Thank You");
		helper.addAttachment(file.getOriginalFilename(), new ByteArrayResource(file.getBytes()));
		
		mailSender.send(message);
		
	}

}
