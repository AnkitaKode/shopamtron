package com.shop.Shopamtron.repository;

import com.shop.Shopamtron.model.CountdownTimer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CountdownTimerRepository extends JpaRepository<CountdownTimer, Long> {
    List<CountdownTimer> findByActive(boolean active);
    Optional<CountdownTimer> findByProductId(Long productId);
    boolean existsByProductId(Long productId);
}
