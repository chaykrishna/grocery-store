package com.grocerystore.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private String image; // image file name or URL
    private Double price;
    private Double oldPrice; // optional, for strike-through price
    private Double rating;   // 4.5, 5, etc.
    private Integer reviews; // number of reviews

    // Constructors
    public Product() {}
    public Product(String name, String category, String image, Double price, Double oldPrice, Double rating, Integer reviews) {
        this.name = name;
        this.category = category;
        this.image = image;
        this.price = price;
        this.oldPrice = oldPrice;
        this.rating = rating;
        this.reviews = reviews;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }        
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public Double getOldPrice() { return oldPrice; }
    public void setOldPrice(Double oldPrice) { this.oldPrice = oldPrice; }
    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }
    public Integer getReviews() { return reviews; }
    public void setReviews(Integer reviews) { this.reviews = reviews; }
    
}
