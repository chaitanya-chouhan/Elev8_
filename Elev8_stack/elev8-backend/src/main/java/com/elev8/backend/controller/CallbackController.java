package com.elev8.backend.controller;

import com.elev8.backend.model.CallbackRequest;
import com.elev8.backend.service.CallbackRequestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * CallbackController
 * REST endpoints for the "Request a Callback" form.
 *
 *  POST  /api/callback  ← React frontend submits here
 *  GET   /api/callback  ← list all requests (admin/demo)
 */
@RestController
@RequestMapping("/api/callback")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class CallbackController {

    private final CallbackRequestService service;

    // Explicit constructor instead of @RequiredArgsConstructor
    public CallbackController(CallbackRequestService service) {
        this.service = service;
    }

    /**
     * POST /api/callback
     * Saves form data to MySQL.
     */
    @PostMapping
    public ResponseEntity<?> create(@RequestBody CallbackRequest request) {
        if (request.getFirstName() == null || request.getFirstName().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "firstName is required"));
        }
        if (request.getEmail() == null || request.getEmail().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "email is required"));
        }
        if (request.getContact() == null || request.getContact().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "contact is required"));
        }

        CallbackRequest saved = service.save(request);
        return ResponseEntity.ok(Map.of(
            "message", "Callback request saved successfully!",
            "id",      saved.getId(),
            "name",    saved.getFirstName() + " " + saved.getLastName()
        ));
    }

    /**
     * GET /api/callback
     * Returns all callback requests.
     */
    @GetMapping
    public ResponseEntity<List<CallbackRequest>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }
}
