package com.elev8.backend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.HexFormat;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Unit tests for PaymentService.
 * Tests the HMAC SHA256 signature verification logic without calling Razorpay API.
 * Note: createOrder() is not unit-tested here since it makes a real API call
 *       — that is covered by integration tests with Razorpay's test environment.
 */
class PaymentServiceTest {

    private PaymentService paymentService;

    private static final String TEST_KEY_ID     = "rzp_test_testKeyId123";
    private static final String TEST_KEY_SECRET = "testSecretKey456";

    @BeforeEach
    void setUp() {
        paymentService = new PaymentService();
        // Inject @Value fields without starting the Spring context
        ReflectionTestUtils.setField(paymentService, "keyId",     TEST_KEY_ID);
        ReflectionTestUtils.setField(paymentService, "keySecret", TEST_KEY_SECRET);
    }

    // ─── Helper: compute valid signature the same way Razorpay does ──────

    private String computeValidSignature(String orderId, String paymentId) throws Exception {
        String message = orderId + "|" + paymentId;
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(TEST_KEY_SECRET.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
        byte[] hash = mac.doFinal(message.getBytes(StandardCharsets.UTF_8));
        return HexFormat.of().formatHex(hash);
    }

    // ─── verifyPaymentSignature() tests ──────────────────────────────────

    @Test
    @DisplayName("verifyPaymentSignature() returns true for a correct HMAC signature")
    void testVerifyValidSignature() throws Exception {
        String orderId   = "order_TEST123456789";
        String paymentId = "pay_TESTPAYMENT123";
        String validSig  = computeValidSignature(orderId, paymentId);

        boolean result = paymentService.verifyPaymentSignature(orderId, paymentId, validSig);

        assertThat(result).isTrue();
    }

    @Test
    @DisplayName("verifyPaymentSignature() returns false for a tampered/wrong signature")
    void testVerifyInvalidSignature() {
        boolean result = paymentService.verifyPaymentSignature(
            "order_TEST123",
            "pay_TEST456",
            "this_is_a_completely_wrong_signature"
        );
        assertThat(result).isFalse();
    }

    @Test
    @DisplayName("verifyPaymentSignature() returns false if orderId is different")
    void testVerifyWrongOrderId() throws Exception {
        String paymentId = "pay_TESTPAYMENT123";
        // Build a valid signature for order_CORRECT
        String validSigForCorrectOrder = computeValidSignature("order_CORRECT", paymentId);

        // But verify with order_WRONG — should fail
        boolean result = paymentService.verifyPaymentSignature("order_WRONG", paymentId, validSigForCorrectOrder);
        assertThat(result).isFalse();
    }

    @Test
    @DisplayName("verifyPaymentSignature() returns false if paymentId is different")
    void testVerifyWrongPaymentId() throws Exception {
        String orderId = "order_TEST789";
        // Build a valid signature for pay_CORRECT
        String validSigForCorrectPayment = computeValidSignature(orderId, "pay_CORRECT");

        // But verify with pay_TAMPERED — should fail
        boolean result = paymentService.verifyPaymentSignature(orderId, "pay_TAMPERED", validSigForCorrectPayment);
        assertThat(result).isFalse();
    }

    @Test
    @DisplayName("verifyPaymentSignature() handles null/empty inputs without crashing")
    void testVerifyNullInputsDoNotCrash() {
        // Should return false gracefully, not throw NullPointerException
        boolean result = paymentService.verifyPaymentSignature("", "", "");
        assertThat(result).isFalse();
    }

    @Test
    @DisplayName("Two different signatures are never equal (uniqueness check)")
    void testSignaturesAreUnique() throws Exception {
        String sig1 = computeValidSignature("order_AAA", "pay_111");
        String sig2 = computeValidSignature("order_BBB", "pay_222");
        assertThat(sig1).isNotEqualTo(sig2);
    }
}
