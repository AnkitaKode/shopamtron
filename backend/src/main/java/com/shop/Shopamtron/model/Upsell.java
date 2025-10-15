package com.shop.Shopamtron.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "upsells")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Upsell {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product; // main product

    @ManyToOne
    @JoinColumn(name = "upsell_product_id")
    private Product upsellProduct;

    @Enumerated(EnumType.STRING)
    private UpsellType type;

    private Integer priority;

    public enum UpsellType { CROSS, UPSELL, BUNDLE }
}
