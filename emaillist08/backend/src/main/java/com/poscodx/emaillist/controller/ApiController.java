package com.poscodx.emaillist.controller;

import com.poscodx.emaillist.dto.JsonResult;
import com.poscodx.emaillist.repository.EmaillistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    private EmaillistRepository emaillistRepository;

    @GetMapping("/api")
    public ResponseEntity<JsonResult> read(
            @RequestParam(value="kw", required = true, defaultValue = "") String keyword) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(JsonResult.success(emaillistRepository.findAll(keyword)));
    }
}
