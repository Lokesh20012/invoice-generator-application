
package com.lokesh.QuickInvoice.controller;

import com.lokesh.QuickInvoice.model.User;
import com.lokesh.QuickInvoice.repository.UserRepository;
import com.lokesh.QuickInvoice.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    // 🟢 SIGNUP — Register new user
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.existsByUserName(user.getUserName())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Username already exists!"));
        }

        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already in use!"));
        }

        // Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Default role
        user.setRoles(Set.of("USER"));

        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User registered successfully!"));
    }

    // 🔐 LOGIN — Authenticate and generate token
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody Map<String, String> loginRequest) {
        String userName = loginRequest.get("userName");
        String password = loginRequest.get("password");

        // Authenticate user using AuthenticationManager
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userName, password)
        );

        // Set authentication context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generate token using UserDetails from authentication
        String jwt = jwtUtils.generateJwtToken((org.springframework.security.core.userdetails.UserDetails) authentication.getPrincipal());

        Map<String, Object> response = new HashMap<>();
        response.put("token", jwt);
        response.put("username", userName);
        response.put("message", "Login successful!");

        return ResponseEntity.ok(response);
    }
}