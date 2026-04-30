package com.elev8.backend.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * AuthController
 *
 * Verifies Firebase ID tokens sent from the React frontend.
 * The frontend sends the token in the Authorization header:
 *   Authorization: Bearer <firebase-id-token>
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    /**
     * POST /api/auth/verify-token
     *
     * Body: { "idToken": "<firebase-id-token>" }
     * Returns: { "uid", "email", "name", "valid": true }
     */
    @PostMapping("/verify-token")
    public ResponseEntity<?> verifyToken(@RequestBody Map<String, String> body) {
        String idToken = body.get("idToken");
        if (idToken == null || idToken.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "idToken is required"));
        }
        try {
            FirebaseToken decoded = FirebaseAuth.getInstance().verifyIdToken(idToken);
            return ResponseEntity.ok(Map.of(
                "valid",  true,
                "uid",    decoded.getUid(),
                "email",  decoded.getEmail() != null ? decoded.getEmail() : "",
                "name",   decoded.getName()  != null ? decoded.getName()  : ""
            ));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of("valid", false, "error", e.getMessage()));
        }
    }

    /**
     * GET /api/auth/me
     *
     * Validates the token from Authorization header and returns user info.
     */
    @GetMapping("/me")
    public ResponseEntity<?> getMe(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body(Map.of("error", "Missing Authorization header"));
        }
        String token = authHeader.substring(7);
        try {
            FirebaseToken decoded = FirebaseAuth.getInstance().verifyIdToken(token);
            return ResponseEntity.ok(Map.of(
                "uid",   decoded.getUid(),
                "email", decoded.getEmail() != null ? decoded.getEmail() : "",
                "name",  decoded.getName()  != null ? decoded.getName()  : ""
            ));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid token"));
        }
    }
}
