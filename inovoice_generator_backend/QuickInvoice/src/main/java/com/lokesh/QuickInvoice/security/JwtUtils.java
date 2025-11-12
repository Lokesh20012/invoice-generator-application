package com.lokesh.QuickInvoice.security;

import java.nio.charset.StandardCharsets;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;



@Component
public class JwtUtils {
	
	@Value("${jwt.secret}")
	private String jwtSecret;
	
	@Value("${jwt.expirationMs}")
	private int jwtExpirationMs;
	
	

    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
        return Keys.hmacShaKeyFor(keyBytes);
    }
	
	//generate Token
	public String generateJwtToken(UserDetails userDetails) {
        return Jwts.builder()
                .setSubject(userDetails.getUsername()) 
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(getSigningKey(), SignatureAlgorithm.HS512) 
                .compact();
    }
	
	//Extract username
	
	public String getUsernameFromJwtToken(String token) {
		return Jwts.parserBuilder()
		        .setSigningKey(getSigningKey())
		        .build()
		        .parseClaimsJws(token)
		        .getBody()
		        .getSubject();
    }
	
	
	// Validate token
	
	public boolean validateJwtToken(String authToken) {
	    try {
	        Jwts.parserBuilder()
	            .setSigningKey(getSigningKey())
	            .build()
	            .parseClaimsJws(authToken);
	        return true;
	    } catch (JwtException e) {
	        System.out.println("Invalid JWT: " + e.getMessage());
	    }
	    return false;
	}

}
