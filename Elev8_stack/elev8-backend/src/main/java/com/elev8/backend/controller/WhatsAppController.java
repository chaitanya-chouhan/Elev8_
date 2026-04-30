package com.elev8.backend.controller;

import com.elev8.backend.service.WhatsAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * WhatsAppController
 *
 * Handles incoming WhatsApp messages via Twilio WhatsApp Sandbox API.
 *
 * SETUP STEPS:
 *   1. Create a Twilio account at https://www.twilio.com
 *   2. Go to Messaging → Try it out → Send a WhatsApp message
 *   3. Join the sandbox: send "join <sandbox-code>" to +1-415-523-8886
 *   4. Set webhook URL in Twilio Console to:
 *      https://YOUR_BACKEND_URL/whatsapp/webhook
 *   5. Fill in TWILIO_* values in application.properties
 *
 * For production: Use Meta WhatsApp Business API instead of sandbox.
 */
@RestController
@RequestMapping("/whatsapp")
public class WhatsAppController {

    @Autowired
    private WhatsAppService whatsAppService;

    /**
     * POST /whatsapp/webhook
     *
     * Twilio sends a POST with form-encoded body when a WhatsApp message arrives.
     * We respond with TwiML (XML) telling Twilio what to reply.
     */
    @PostMapping(value = "/webhook",
                 consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
                 produces = MediaType.TEXT_XML_VALUE)
    public ResponseEntity<String> handleIncoming(
            @RequestParam(value = "From", required = false) String from,
            @RequestParam(value = "Body", required = false) String body,
            @RequestParam(value = "ProfileName", required = false) String profileName) {

        System.out.printf("📱 WhatsApp from %s (%s): %s%n", from, profileName, body);

        String replyText = whatsAppService.processMessage(body, from, profileName);

        // Return TwiML response
        String twiml = String.format("""
            <?xml version="1.0" encoding="UTF-8"?>
            <Response>
                <Message>%s</Message>
            </Response>
            """, escapeXml(replyText));

        return ResponseEntity.ok(twiml);
    }

    private String escapeXml(String text) {
        if (text == null) return "";
        return text
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("\"", "&quot;");
    }
}
