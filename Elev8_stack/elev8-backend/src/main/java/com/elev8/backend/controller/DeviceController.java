package com.elev8.backend.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.ExecutionException;

/**
 * DeviceController
 *
 * Manages active login sessions per user.
 * Firestore path: users/{uid}/sessions/{deviceId}
 *
 * Max devices enforced by the React frontend (AuthContext.jsx)
 * but this backend also exposes a server-side check endpoint.
 */
@RestController
@RequestMapping("/api/devices")
public class DeviceController {

    private static final int MAX_DEVICES = 2;

    private FirebaseToken verifyHeader(String authHeader) throws Exception {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new IllegalArgumentException("Missing token");
        }
        return FirebaseAuth.getInstance().verifyIdToken(authHeader.substring(7));
    }

    /**
     * GET /api/devices
     * Lists all active sessions for the authenticated user.
     */
    @GetMapping
    public ResponseEntity<?> listSessions(@RequestHeader("Authorization") String auth)
            throws Exception {
        FirebaseToken token = verifyHeader(auth);
        String uid = token.getUid();

        Firestore db = FirestoreClient.getFirestore();
        CollectionReference sessions = db.collection("users").document(uid).collection("sessions");
        List<QueryDocumentSnapshot> docs = sessions.get().get().getDocuments();

        List<Map<String, Object>> result = new ArrayList<>();
        for (QueryDocumentSnapshot doc : docs) {
            result.add(doc.getData());
        }
        return ResponseEntity.ok(Map.of("sessions", result, "count", result.size()));
    }

    /**
     * POST /api/devices/check
     * Returns whether the user can log in on a new device.
     */
    @PostMapping("/check")
    public ResponseEntity<?> checkLimit(@RequestHeader("Authorization") String auth)
            throws Exception {
        FirebaseToken token = verifyHeader(auth);
        String uid = token.getUid();

        Firestore db = FirestoreClient.getFirestore();
        CollectionReference sessions = db.collection("users").document(uid).collection("sessions");
        int count = sessions.get().get().size();

        return ResponseEntity.ok(Map.of(
            "allowed", count < MAX_DEVICES,
            "current", count,
            "max", MAX_DEVICES
        ));
    }

    /**
     * DELETE /api/devices/{deviceId}
     * Revokes (removes) a specific session.
     */
    @DeleteMapping("/{deviceId}")
    public ResponseEntity<?> revokeSession(
            @RequestHeader("Authorization") String auth,
            @PathVariable String deviceId) throws Exception {
        FirebaseToken token = verifyHeader(auth);
        String uid = token.getUid();

        Firestore db = FirestoreClient.getFirestore();
        db.collection("users").document(uid).collection("sessions").document(deviceId).delete().get();

        return ResponseEntity.ok(Map.of("message", "Session revoked", "deviceId", deviceId));
    }

    /**
     * DELETE /api/devices/all
     * Revokes ALL sessions (force logout from all devices).
     */
    @DeleteMapping("/all")
    public ResponseEntity<?> revokeAll(@RequestHeader("Authorization") String auth)
            throws Exception {
        FirebaseToken token = verifyHeader(auth);
        String uid = token.getUid();

        Firestore db = FirestoreClient.getFirestore();
        CollectionReference sessions = db.collection("users").document(uid).collection("sessions");
        for (QueryDocumentSnapshot doc : sessions.get().get().getDocuments()) {
            doc.getReference().delete();
        }
        return ResponseEntity.ok(Map.of("message", "All sessions revoked for " + uid));
    }
}
