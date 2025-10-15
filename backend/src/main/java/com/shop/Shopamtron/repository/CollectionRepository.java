package com.shop.Shopamtron.repository;

import com.shop.Shopamtron.model.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long> {
    Optional<Collection> findByName(String name);
    Optional<Collection> findBySlug(String slug);
    boolean existsBySlug(String slug);
}
