package com.elev8.backend.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.HexFormat;
import java.util.Map;

/**
 * PaymentService
 *
 * Handles all Razorpay payment operations:
 *  1. createOrder()   — Creates a Razorpay order (Step 1 of payment flow)
 *  2. verifyPayment() — Verifies the HMAC SHA256 signature after payment (Step 2)
 *
 * ─── How Razorpay Payment Works ───────────────────────────────────────────
 *  Step 1: User clicks "Proceed to Checkout" on the Store page.
 *          React calls POST /api/payment/create-order with the cart total amount.
 *          This service creates an order via Razorpay API and returns orderId.
 *
 *  Step 2: React loads the Razorpay checkout popup modal with the orderId.
 *          User enters card/UPI/netbanking details and completes the payment.
 *
 *  Step 3: Razorpay sends back: årazorpay_payment_id, razorpay_order_id, razorpay_signature.
 *          React sends these 3 values to POST /api/payment/verify.
 *          This service verifies the HMAC SHA256 signature to confirm the payment is genuine.
 *
 * ─── Setup Instructions ────────────────────────────────────────────────────
 *  1. Create a free Razorpay account at https://razorpay.com
 *  2. Go to Dashboard → Settings → API Keys → Generate Test API Keys
 *  3. Copy Key ID and Key Secret into application.properties:
 *       razorpay.key.id=rzp_test_XXXXXXXXXXXXXX
 *       razorpay.key.secret=XXXXXXXXXXXXXXXXXXXXXXXX
 *  4. For production, use Live API keys (rzp_live_...)
 */
@Service
public class PaymentService {

    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String keySecret;

    /**
     * Creates a Razorpay order.
     *
     * @param amountInRupees The cart total in Indian Rupees (e.g. 2499.0 for ₹2,499)
     * @param receiptId      A unique receipt ID (e.g. "ELEV8_ORDER_1718123456")
     * @return Map containing: orderId, amount (in paise), currency, receipt, keyId
     * @throws RazorpayException if Razorpay API call fails
     */
    public Map<String, Object> createOrder(double amountInRupees, String receiptId)
            throws RazorpayException {

        RazorpayClient client = new RazorpayClient(keyId, keySecret);

        // Razorpay requires amount in PAISE (1 Rupee = 100 Paise)
        int amountInPaise = (int) Math.round(amountInRupees * 100);

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amountInPaise);
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", receiptId);
        orderRequest.put("payment_capture", 1); // auto-capture payment on success

        Order order = client.orders.create(orderRequest);

        return Map.of(
            "orderId",   order.get("id"),
            "amount",    amountInPaise,
            "currency",  "INR",
            "receipt",   receiptId,
            "keyId",     keyId           // sent to frontend to initialise Razorpay modal
        );
    }

    /**
     * Verifies the Razorpay payment signature.
     *
     * Razorpay generates a signature = HMAC_SHA256(orderId + "|" + paymentId, keySecret)
     * We recompute it on our end and compare — if they match, payment is genuine.
     *
     * @param razorpayOrderId   The order ID returned during createOrder
     * @param razorpayPaymentId The payment ID sent back by Razorpay after payment
     * @param razorpaySignature The signature sent back by Razorpay after payment
     * @return true if the signature is valid (payment is genuine), false otherwise
     */
    public boolean verifyPaymentSignature(String razorpayOrderId,
                                          String razorpayPaymentId,
                                          String razorpaySignature) {
        try {
            // Build the expected message: "orderId|paymentId"
            String message = razorpayOrderId + "|" + razorpayPaymentId;

            // Compute HMAC SHA256 using our Key Secret
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(
                keySecret.getBytes(StandardCharsets.UTF_8), "HmacSHA256"
            );
            mac.init(secretKey);
            byte[] hashBytes = mac.doFinal(message.getBytes(StandardCharsets.UTF_8));

            // Convert bytes to hex string
            String computedSignature = HexFormat.of().formatHex(hashBytes);

            // Compare our computed signature with Razorpay's signature
            return computedSignature.equals(razorpaySignature);

        } catch (Exception e) {
            return false;
        }
    }
}
