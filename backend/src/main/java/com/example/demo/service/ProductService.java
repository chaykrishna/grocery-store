package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepo;

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public Product addProduct(Product p) {
        return productRepo.save(p);
    }

    public void deleteProduct(Long id) {
        productRepo.deleteById(id);
    }

    public Optional<Product> getProduct(Long id) {
        return productRepo.findById(id);
    }
}
