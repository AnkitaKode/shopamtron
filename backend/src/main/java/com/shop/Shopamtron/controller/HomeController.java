package com.shop.Shopamtron.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class HomeController {

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> home() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("message", "Welcome to Shopamtron API! The backend is running.");
        response.put("description", "Use the following endpoints to interact with the application:");

        Map<String, String> endpoints = new LinkedHashMap<>();
        endpoints.put("/api/products", "Get all products");
        endpoints.put("/api/products/{id}", "Get product by ID");
        endpoints.put("/api/categories", "Get all categories");
        endpoints.put("/api/users", "Get all users");
        endpoints.put("/api/orders", "Get all orders");
        endpoints.put("/api/admin", "Admin-specific operations");

        response.put("endpoints", endpoints);

        return response;
    }
}
