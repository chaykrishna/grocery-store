package com.grocerystore.backend.controller;

import org.springframework.web.bind.annotation.*;

import com.grocerystore.backend.model.Product;
import com.grocerystore.backend.repository.ProductRepository;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // React dev server
public class ProductController {

    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return repository.save(product);
    }
}
