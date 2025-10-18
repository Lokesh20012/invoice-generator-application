package com.lokesh.QuickInvoice.model;

import java.util.Set;
import java.util.HashSet;

import org.springframework.data.annotation.Id;

public class User {
 
@Id	
private String id;	
private String userName;
private String password;
private String email;
private Set<String> roles = new HashSet<>();

public User(String userName, String email, String password, Set<String> roles) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.roles = roles;
}

// Getters & Setters
public String getId() 
{ 
	return id;
}
public void setId(String id) { 
	this.id = id;
	}

public String getUserName() { 
	return userName;
	}
public void setUserName(String userName) { 
	this.userName = userName;
	}

public String getEmail() { 
	return email;
	}
public void setEmail(String email) { 
	this.email = email;
	}

public String getPassword() { 
	return password;
	}
public void setPassword(String password) { 
	this.password = password;
	}

public void setRoles(Set<String> roles) {
	this.roles = roles;
}

public Set<String> getRoles(){
	return roles;
}

}
