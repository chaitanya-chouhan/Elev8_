package com.elev8.backend.controller;

import com.elev8.backend.model.CallbackRequest;
import com.elev8.backend.service.CallbackRequestService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Map;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration-style tests for CallbackController using MockMvc.
 * Tests the HTTP layer: request parsing, validation, response JSON, and status codes.
 * Imports SecurityConfig to apply CORS and auth rules.
 */
@WebMvcTest(CallbackController.class)
@Import(com.elev8.backend.config.SecurityConfig.class)
class CallbackControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CallbackRequestService service;

    @Autowired
    private ObjectMapper objectMapper;

    // ─── POST /api/callback ──────────────────────────────────────────────

    @Test
    @DisplayName("POST /api/callback with valid data returns 200 with success message")
    void testCreateCallbackSuccess() throws Exception {
        // Arrange: mock what the service will return after saving
        CallbackRequest saved = new CallbackRequest();
        saved.setId(1L);
        saved.setFirstName("Chaitanya");
        saved.setLastName("Chouhan");
        saved.setEmail("chaitanya@example.com");
        saved.setContact("+919876543210");
        when(service.save(any())).thenReturn(saved);

        // Request body
        Map<String, String> body = Map.of(
            "firstName", "Chaitanya",
            "lastName",  "Chouhan",
            "email",     "chaitanya@example.com",
            "contact",   "+919876543210",
            "healthGoals", "Weight Loss"
        );

        mockMvc.perform(post("/api/callback")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(body)))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.message").value("Callback request saved successfully!"))
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.name").value("Chaitanya Chouhan"));
    }

    @Test
    @DisplayName("POST /api/callback missing firstName returns 400 Bad Request")
    void testCreateCallbackMissingFirstName() throws Exception {
        Map<String, String> body = Map.of(
            "lastName",  "Chouhan",
            "email",     "chaitanya@example.com",
            "contact",   "+919876543210"
        );

        mockMvc.perform(post("/api/callback")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(body)))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.error").value("firstName is required"));
    }

    @Test
    @DisplayName("POST /api/callback missing email returns 400 Bad Request")
    void testCreateCallbackMissingEmail() throws Exception {
        Map<String, String> body = Map.of(
            "firstName", "Chaitanya",
            "lastName",  "Chouhan",
            "contact",   "+919876543210"
        );

        mockMvc.perform(post("/api/callback")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(body)))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.error").value("email is required"));
    }

    @Test
    @DisplayName("POST /api/callback missing contact returns 400 Bad Request")
    void testCreateCallbackMissingContact() throws Exception {
        Map<String, String> body = Map.of(
            "firstName", "Chaitanya",
            "lastName",  "Chouhan",
            "email",     "chaitanya@example.com"
        );

        mockMvc.perform(post("/api/callback")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(body)))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.error").value("contact is required"));
    }

    // ─── GET /api/callback ───────────────────────────────────────────────

    @Test
    @DisplayName("GET /api/callback returns list of all callback requests")
    void testGetAllCallbacks() throws Exception {
        CallbackRequest r1 = new CallbackRequest();
        r1.setFirstName("Sahil");
        r1.setEmail("sahil@example.com");

        CallbackRequest r2 = new CallbackRequest();
        r2.setFirstName("Himanshu");
        r2.setEmail("himanshu@example.com");

        when(service.findAll()).thenReturn(List.of(r1, r2));

        mockMvc.perform(get("/api/callback"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.length()").value(2))
            .andExpect(jsonPath("$[0].firstName").value("Sahil"))
            .andExpect(jsonPath("$[1].firstName").value("Himanshu"));
    }

    @Test
    @DisplayName("GET /api/callback returns empty array when no requests exist")
    void testGetAllCallbacksEmpty() throws Exception {
        when(service.findAll()).thenReturn(List.of());

        mockMvc.perform(get("/api/callback"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.length()").value(0));
    }
}
