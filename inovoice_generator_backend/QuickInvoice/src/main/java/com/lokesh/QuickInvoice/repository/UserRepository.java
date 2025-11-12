package com.lokesh.QuickInvoice.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lokesh.QuickInvoice.model.User;

public interface UserRepository extends MongoRepository<User, String> {
	Optional<User> findByUserName(String userName);
	Boolean existsByUserName(String userName);
	Boolean existsByEmail(String email);
	

}
