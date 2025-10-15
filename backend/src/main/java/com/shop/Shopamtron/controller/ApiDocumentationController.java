package com.shop.Shopamtron.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ApiDocumentationController {

    @GetMapping("/docs")
    public String apiDocumentation() {
        return "forward:/api-docs.html";
    }

    @GetMapping("/api")
    public String apiDocumentationRedirect() {
        return "redirect:/docs";
    }
}
