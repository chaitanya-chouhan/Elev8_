package com.elev8.backend.model;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Unit tests for the CallbackRequest JPA entity.
 * Tests all getters, setters, and the @PrePersist onCreate() lifecycle hook.
 */
class CallbackRequestTest {

    @Test
    @DisplayName("All setters and getters work correctly")
    void testSettersAndGetters() {
        CallbackRequest request = new CallbackRequest();

        request.setFirstName("Soham");
        request.setLastName("Rastogi");
        request.setEmail("soham@example.com");
        request.setContact("+919876543210");
        request.setHealthGoals("Better Sleep");
        request.setDescription("I want to fix my sleep schedule.");

        assertThat(request.getFirstName()).isEqualTo("Soham");
        assertThat(request.getLastName()).isEqualTo("Rastogi");
        assertThat(request.getEmail()).isEqualTo("soham@example.com");
        assertThat(request.getContact()).isEqualTo("+919876543210");
        assertThat(request.getHealthGoals()).isEqualTo("Better Sleep");
        assertThat(request.getDescription()).isEqualTo("I want to fix my sleep schedule.");
    }

    @Test
    @DisplayName("ID setter and getter work correctly")
    void testIdSetterAndGetter() {
        CallbackRequest request = new CallbackRequest();
        request.setId(42L);
        assertThat(request.getId()).isEqualTo(42L);
    }

    @Test
    @DisplayName("Default state: all fields are null before setting")
    void testDefaultNullState() {
        CallbackRequest request = new CallbackRequest();
        assertThat(request.getId()).isNull();
        assertThat(request.getFirstName()).isNull();
        assertThat(request.getEmail()).isNull();
        assertThat(request.getCreatedAt()).isNull();
    }

    @Test
    @DisplayName("onCreate() sets createdAt to current timestamp")
    void testOnCreateSetsCreatedAt() throws Exception {
        CallbackRequest request = new CallbackRequest();
        // Manually invoke the @PrePersist method (called by JPA before save)
        var method = CallbackRequest.class.getDeclaredMethod("onCreate");
        method.setAccessible(true);
        method.invoke(request);

        assertThat(request.getCreatedAt()).isNotNull();
        assertThat(request.getCreatedAt()).isBeforeOrEqualTo(LocalDateTime.now());
        // Timestamp should be very recent (within 5 seconds)
        assertThat(request.getCreatedAt()).isAfter(LocalDateTime.now().minusSeconds(5));
    }

    @Test
    @DisplayName("createdAt can be set manually via setter")
    void testCreatedAtSetter() {
        CallbackRequest request = new CallbackRequest();
        LocalDateTime fixedTime = LocalDateTime.of(2025, 6, 11, 10, 30);
        request.setCreatedAt(fixedTime);
        assertThat(request.getCreatedAt()).isEqualTo(fixedTime);
    }
}
