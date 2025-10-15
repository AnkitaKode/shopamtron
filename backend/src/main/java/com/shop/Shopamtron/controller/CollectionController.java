package com.shop.Shopamtron.controller;

import com.shop.Shopamtron.model.Collection;
import com.shop.Shopamtron.repository.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/collections")
public class CollectionController {

    @Autowired
    private CollectionRepository collectionRepository;

    @GetMapping
    public List<Collection> getAllCollections() {
        return collectionRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Collection> getCollectionById(@PathVariable Long id) {
        return collectionRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Collection> getCollectionBySlug(@PathVariable String slug) {
        return collectionRepository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Collection> createCollection(@RequestBody Collection collection) {
        if (collectionRepository.existsBySlug(collection.getSlug())) {
            return ResponseEntity.badRequest().build();
        }
        Collection savedCollection = collectionRepository.save(collection);
        return ResponseEntity
                .created(URI.create("/api/collections/" + savedCollection.getId()))
                .body(savedCollection);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Collection> updateCollection(
            @PathVariable Long id, @RequestBody Collection collection) {
        return collectionRepository.findById(id)
                .map(existingCollection -> {
                    collection.setId(id);
                    return ResponseEntity.ok(collectionRepository.save(collection));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCollection(@PathVariable Long id) {
        return collectionRepository.findById(id)
                .map(collection -> {
                    collectionRepository.delete(collection);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
