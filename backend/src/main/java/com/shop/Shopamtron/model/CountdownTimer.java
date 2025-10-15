package com.shop.Shopamtron.model;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "countdown_timers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CountdownTimer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private String message;
    private Boolean active;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

}
