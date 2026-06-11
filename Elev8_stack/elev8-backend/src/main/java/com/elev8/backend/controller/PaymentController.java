package com.elev8.backend.controller;

import com.elev8.backend.service.PaymentService;
import com.razorpay.RazorpayException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * PaymentController
 *
 * REST API for Razorpay payment integration.
 *
 * ─── Endpoints ────────────────────────────────────────────────────────────
 *  POST /api/payment/create-order  → Creates a Razorpay order, returns orderId + keyId
 *  POST /api/payment/verify        → Verifies payment signature after user pays
 *  GET  /api/payment/health        → Quick sanity check (Razorpay config loaded)
 *
 * ─── Payment Flow ─────────────────────────────────────────────────────────
 *  1. User fills cart on Store page, clicks "Proceed to Checkout"
 *  2. React calls POST /api/payment/create-order  →  gets { orderId, keyId, amount }
 *  3. React opens the Razorpay checkout modal using that orderId + keyId
 *  4. User pays via card/UPI/netbanking inside the Razorpay modal
 *  5. Razorpay returns { razorpay_payment_id, razorpay_order_id, razorpay_signature }
 *  6. React calls POST /api/payment/verify  →  backend checks the signature
 *  7. If valid: payment confirmed, show success screen. If invalid: show error.
 */
@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    /**
     * POST /api/payment/create-order
     *
     * Request body:
     * {
     *   "amount": 3598.0,          ← cart total in Rupees
     *   "receipt": "ELEV8_1234"    ← optional custom receipt ID
     * }
     *
     * Response (200 OK):
     * {
     *   "orderId":  "order_XXXXXXXXXXXXXXXX",
     *   "amount":   359800,           ← amount in paise
     *   "currency": "INR",
     *   "receipt":  "ELEV8_1234",
     *   "keyId":    "rzp_test_XXXXXXXXX"  ← use this in the Razorpay modal on frontend
     * }
     */
    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody Map<String, Object> body) {
        // Validate amount
        Object rawAmount = body.get("amount");
        if (rawAmount == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "amount is required"));
        }

        double amount;
        try {
            amount = Double.parseDouble(rawAmount.toString());
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "amount must be a valid number"));
        }

        if (amount <= 0) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "amount must be greater than 0"));
        }

        // Build a receipt ID (use provided one, or generate from timestamp)
        String receipt = body.containsKey("receipt")
            ? body.get("receipt").toString()
            : "ELEV8_" + System.currentTimeMillis();

        try {
            Map<String, Object> orderDetails = paymentService.createOrder(amount, receipt);
            return ResponseEntity.ok(orderDetails);

        } catch (RazorpayException e) {
            return ResponseEntity.internalServerError()
                .body(Map.of("error", "Failed to create Razorpay order: " + e.getMessage()));
        }
    }

    /**
     * POST /api/payment/verify
     *
     * Called AFTER the user completes payment in the Razorpay modal.
     * Razorpay sends these 3 values back to the frontend — forward them here for verification.
     *
     * Request body:
     * {
     *   "razorpay_order_id":   "order_XXXXXXXXXXXXXXXX",
     *   "razorpay_payment_id": "pay_XXXXXXXXXXXXXXXX",
     *   "razorpay_signature":  "abc123def456..."
     * }
     *
     * Response (200 OK):
     * { "success": true,  "message": "Payment verified successfully!" }
     * { "success": false, "message": "Payment verification failed. Signature mismatch." }
     */
    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, String> body) {
        String orderId   = body.get("razorpay_order_id");
        String paymentId = body.get("razorpay_payment_id");
        String signature = body.get("razorpay_signature");

        // Validate all 3 fields are present
        if (orderId == null || orderId.isBlank()) {
            return ResponseEntity.badRequest()
                .body(Map.of("success", false, "message", "razorpay_order_id is required"));
        }
        if (paymentId == null || paymentId.isBlank()) {
            return ResponseEntity.badRequest()
                .body(Map.of("success", false, "message", "razorpay_payment_id is required"));
        }
        if (signature == null || signature.isBlank()) {
            return ResponseEntity.badRequest()
                .body(Map.of("success", false, "message", "razorpay_signature is required"));
        }

        boolean isValid = paymentService.verifyPaymentSignature(orderId, paymentId, signature);

        if (isValid) {
            return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Payment verified successfully!",
                "paymentId", paymentId
            ));
        } else {
            return ResponseEntity.status(400).body(Map.of(
                "success", false,
                "message", "Payment verification failed. Signature mismatch."
            ));
        }
    }

    /**
     * GET /api/payment/health
     * Quick check to confirm the payment controller is running.
     */
    @GetMapping("/health")
    public ResponseEntity<?> health() {
        return ResponseEntity.ok(Map.of(
            "status",  "Razorpay integration is active",
            "gateway", "Razorpay",
            "currency", "INR"
        ));
    }
}
