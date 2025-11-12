package com.lokesh.QuickInvoice.security;


import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.util.Base64;
import javax.crypto.SecretKey;

public class GenerateJwtKey {
    public static void main(String[] args) {
        // Generate a secure key for HS512 algorithm
        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS512);

        // Encode to Base64 string so you can copy it to application.properties
        String encodedKey = Base64.getEncoder().encodeToString(key.getEncoded());
        System.out.println("Your secure JWT secret key:\n" + encodedKey);
    }
}