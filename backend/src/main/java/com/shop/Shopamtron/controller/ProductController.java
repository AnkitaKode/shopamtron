package com.shop.Shopamtron.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.shop.Shopamtron.model.Product;
import com.shop.Shopamtron.repository.ProductRepository;
import com.shop.Shopamtron.service.FileStorageService;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private FileStorageService fileStorageService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        return productRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Keep JSON endpoint
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // admin
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Product createProductMultipart(
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "shortDescription", required = false) String shortDescription,
            @RequestParam(value = "longDescription", required = false) String longDescription,
            @RequestParam(value = "price", required = false) String price,
            @RequestParam(value = "compareAtPrice", required = false) String compareAtPrice,
            @RequestParam(value = "shopifyProductId", required = false) String shopifyProductId,
            @RequestParam(value = "featuredImage", required = false) MultipartFile featuredImage) {
        Product product = new Product();
        if (title != null)
            product.setTitle(title);
        if (shortDescription != null)
            product.setShortDescription(shortDescription);
        if (longDescription != null)
            product.setLongDescription(longDescription);
        if (shopifyProductId != null)
            product.setShopifyProductId(shopifyProductId);

        if (price != null && !price.isBlank()) {
            try {
                product.setPrice(new BigDecimal(price));
            } catch (NumberFormatException ignored) {
            }
        }
        if (compareAtPrice != null && !compareAtPrice.isBlank()) {
            try {
                product.setCompareAtPrice(new BigDecimal(compareAtPrice));
            } catch (NumberFormatException ignored) {
            }
        }

        // handle file
        if (featuredImage != null && !featuredImage.isEmpty()) {
            String fileUrl = fileStorageService.storeFile(featuredImage);
            product.setFeaturedImageUrl(fileUrl);
        }

        return productRepository.save(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productRepository.findById(id).map((Product existing) -> {
            product.setId(existing.getId());
            return ResponseEntity.ok(productRepository.save(product));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        return productRepository.findById(id).map(p -> {
            productRepository.delete(p);
            return ResponseEntity.ok().<Void>build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
