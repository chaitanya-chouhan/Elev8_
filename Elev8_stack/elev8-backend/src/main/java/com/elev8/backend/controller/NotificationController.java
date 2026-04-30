package com.elev8.backend.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.messaging.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * NotificationController
 *
 * Sends FCM push notifications to users.
 *
 * Uses Firebase Admin SDK's FirebaseMessaging.
 *
 * Endpoints:
 *   POST /api/notify/send-to-token   → send to specific device token
 *   POST /api/notify/send-to-topic   → broadcast to a topic (e.g., "all-users")
 */
@RestController
@RequestMapping("/api/notify")
public class NotificationController {

    /**
     * POST /api/notify/send-to-token
     *
     * Body:
     * {
     *   "token": "<device-fcm-token>",
     *   "title": "Elev8 Alert",
     *   "body": "Your workout reminder is here!",
     *   "imageUrl": "optional"
     * }
     */
    @PostMapping("/send-to-token")
    public ResponseEntity<?> sendToToken(
            @RequestHeader("Authorization") String auth,
            @RequestBody Map<String, String> body) {
        try {
            // Verify caller is authenticated (optional admin check can be added)
            FirebaseToken token = FirebaseAuth.getInstance().verifyIdToken(auth.substring(7));

            Message message = Message.builder()
                .setToken(body.get("token"))
                .setNotification(Notification.builder()
                    .setTitle(body.getOrDefault("title", "Elev8"))
                    .setBody(body.getOrDefault("body", "You have a new notification"))
                    .setImage(body.getOrDefault("imageUrl", null))
                    .build())
                .putData("click_action", "OPEN_ACTIVITY")
                .build();

            String messageId = FirebaseMessaging.getInstance().send(message);
            return ResponseEntity.ok(Map.of("success", true, "messageId", messageId));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("success", false, "error", e.getMessage()));
        }
    }

    /**
     * POST /api/notify/send-to-topic
     *
     * Body:
     * {
     *   "topic": "all-users",
     *   "title": "New Feature Alert!",
     *   "body": "Check out what's new on Elev8 🏋️"
     * }
     */
    @PostMapping("/send-to-topic")
    public ResponseEntity<?> sendToTopic(
            @RequestHeader("Authorization") String auth,
            @RequestBody Map<String, String> body) {
        try {
            FirebaseAuth.getInstance().verifyIdToken(auth.substring(7));

            Message message = Message.builder()
                .setTopic(body.getOrDefault("topic", "all-users"))
                .setNotification(Notification.builder()
                    .setTitle(body.getOrDefault("title", "Elev8"))
                    .setBody(body.getOrDefault("body", "You have a new notification"))
                    .build())
                .build();

            String messageId = FirebaseMessaging.getInstance().send(message);
            return ResponseEntity.ok(Map.of("success", true, "messageId", messageId));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("success", false, "error", e.getMessage()));
        }
    }

    /**
     * POST /api/notify/subscribe-topic
     *
     * Subscribes a device token to a topic.
     * Body: { "token": "<fcm-token>", "topic": "all-users" }
     */
    @PostMapping("/subscribe-topic")
    public ResponseEntity<?> subscribeToTopic(@RequestBody Map<String, String> body) {
        try {
            String fcmToken = body.get("token");
            String topic = body.getOrDefault("topic", "all-users");

            TopicManagementResponse response = FirebaseMessaging.getInstance()
                .subscribeToTopic(java.util.List.of(fcmToken), topic);

            return ResponseEntity.ok(Map.of(
                "success", true,
                "successCount", response.getSuccessCount(),
                "failureCount", response.getFailureCount()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("success", false, "error", e.getMessage()));
        }
    }
}
