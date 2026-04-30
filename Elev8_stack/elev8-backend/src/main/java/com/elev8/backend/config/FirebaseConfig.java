package com.elev8.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;

/**
 * FirebaseConfig
 *
 * Initializes the Firebase Admin SDK on startup.
 *
 * SETUP:
 *   1. Go to Firebase Console → Project Settings → Service Accounts
 *   2. Click "Generate new private key" → download JSON
 *   3. Save it as: src/main/resources/firebase-service-account.json
 *   4. DO NOT commit this file to git — add to .gitignore
 */
@Configuration
public class FirebaseConfig {

    @PostConstruct
    public void initFirebase() {
        if (FirebaseApp.getApps().isEmpty()) {
            try {
                InputStream serviceAccount =
                    new ClassPathResource("firebase-service-account.json").getInputStream();

                FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();

                FirebaseApp.initializeApp(options);
                System.out.println("✅ Firebase Admin SDK initialized");
            } catch (IOException e) {
                System.err.println("⚠️ WARNING: firebase-service-account.json not found in src/main/resources!");
                System.err.println("Firebase Admin SDK features (like device limits and push notifications) will not work.");
                System.err.println("However, the rest of the backend (like the WhatsApp bot) will continue to run.");
            }
        }
    }
}
