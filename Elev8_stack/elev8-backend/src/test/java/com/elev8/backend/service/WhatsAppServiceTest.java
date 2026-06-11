package com.elev8.backend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Unit tests for WhatsAppService.
 * Tests every bot command keyword branch and the default fallback.
 * No Spring context needed — pure unit test.
 */
class WhatsAppServiceTest {

    private WhatsAppService service;

    @BeforeEach
    void setUp() {
        service = new WhatsAppService();
    }

    // ─── Welcome / Greeting ──────────────────────────────────────────────

    @Test
    @DisplayName("'hi' triggers welcome message with user name")
    void testHiReturnsWelcome() {
        String reply = service.processMessage("hi", "whatsapp:+911234567890", "Prakhar");
        assertThat(reply).contains("Welcome to Elev8");
        assertThat(reply).contains("Prakhar");
        assertThat(reply).contains("diet");
        assertThat(reply).contains("workout");
    }

    @Test
    @DisplayName("'hello' also triggers welcome message")
    void testHelloReturnsWelcome() {
        String reply = service.processMessage("hello", "whatsapp:+911234567890", "Sahil");
        assertThat(reply).contains("Welcome to Elev8");
    }

    @Test
    @DisplayName("'start' triggers welcome message")
    void testStartReturnsWelcome() {
        String reply = service.processMessage("start", "whatsapp:+911234567890", null);
        assertThat(reply).contains("Welcome to Elev8");
        // null name should default gracefully
        assertThat(reply).contains("there");
    }

    // ─── Diet ────────────────────────────────────────────────────────────

    @Test
    @DisplayName("'diet' triggers diet message with nutrition tips")
    void testDietKeyword() {
        String reply = service.processMessage("diet", null, null);
        assertThat(reply).contains("Diet");
        assertThat(reply).contains("protein");
        assertThat(reply).contains("water");
    }

    @Test
    @DisplayName("'food' also triggers diet message")
    void testFoodKeyword() {
        String reply = service.processMessage("food", null, "Sankshitha");
        assertThat(reply).contains("Diet");
    }

    @Test
    @DisplayName("'nutrition' triggers diet message")
    void testNutritionKeyword() {
        String reply = service.processMessage("nutrition", null, null);
        assertThat(reply).contains("Diet");
    }

    // ─── Workout ─────────────────────────────────────────────────────────

    @Test
    @DisplayName("'workout' triggers workout message with beginner split")
    void testWorkoutKeyword() {
        String reply = service.processMessage("workout", null, "Manish");
        assertThat(reply).contains("Weight Training");
        assertThat(reply).contains("Chest");
        assertThat(reply).contains("Back");
    }

    @Test
    @DisplayName("'gym' triggers workout message")
    void testGymKeyword() {
        String reply = service.processMessage("gym", null, null);
        assertThat(reply).contains("Weight Training");
    }

    @Test
    @DisplayName("'exercise' triggers workout message")
    void testExerciseKeyword() {
        String reply = service.processMessage("exercise", null, null);
        assertThat(reply).contains("Weight Training");
    }

    // ─── Yoga ────────────────────────────────────────────────────────────

    @Test
    @DisplayName("'yoga' triggers yoga and meditation message")
    void testYogaKeyword() {
        String reply = service.processMessage("yoga", null, "Srikruthi");
        assertThat(reply).contains("Yoga");
        assertThat(reply).contains("breathing");
    }

    @Test
    @DisplayName("'meditation' triggers yoga message")
    void testMeditationKeyword() {
        String reply = service.processMessage("meditation", null, null);
        assertThat(reply).contains("Yoga");
    }

    @Test
    @DisplayName("'stress' triggers yoga message")
    void testStressKeyword() {
        String reply = service.processMessage("stress", null, null);
        assertThat(reply).contains("Yoga");
    }

    // ─── Sleep / Circadian ───────────────────────────────────────────────

    @Test
    @DisplayName("'sleep' triggers circadian / sleep optimization message")
    void testSleepKeyword() {
        String reply = service.processMessage("sleep", null, null);
        assertThat(reply).contains("Sleep");
        assertThat(reply).contains("circadian");
    }

    @Test
    @DisplayName("'circadian' triggers sleep message")
    void testCircadianKeyword() {
        String reply = service.processMessage("circadian", null, null);
        assertThat(reply).contains("Sleep");
    }

    // ─── Calisthenics ────────────────────────────────────────────────────

    @Test
    @DisplayName("'calisthenics' triggers bodyweight training message")
    void testCalisthenicsKeyword() {
        String reply = service.processMessage("calisthenics", null, "Manish");
        assertThat(reply).contains("Calisthenics");
        assertThat(reply).contains("Push-ups");
    }

    @Test
    @DisplayName("'bodyweight' triggers calisthenics message")
    void testBodyweightKeyword() {
        String reply = service.processMessage("bodyweight", null, null);
        assertThat(reply).contains("Calisthenics");
    }

    // ─── Premium ─────────────────────────────────────────────────────────

    @Test
    @DisplayName("'premium' triggers pricing plan message")
    void testPremiumKeyword() {
        String reply = service.processMessage("premium", null, "Parth");
        assertThat(reply).contains("Premium Plans");
        assertThat(reply).contains("999");
        assertThat(reply).contains("2,999");
    }

    @Test
    @DisplayName("'pricing' triggers premium message")
    void testPricingKeyword() {
        String reply = service.processMessage("pricing", null, null);
        assertThat(reply).contains("Premium Plans");
    }

    // ─── Contact / Help ──────────────────────────────────────────────────

    @Test
    @DisplayName("'contact' triggers contact info message with email")
    void testContactKeyword() {
        String reply = service.processMessage("contact", null, null);
        assertThat(reply).contains("Contact");
        assertThat(reply).contains("elev8@iiitl.ac.in");
    }

    @Test
    @DisplayName("'help' triggers contact message")
    void testHelpKeyword() {
        String reply = service.processMessage("help", null, null);
        assertThat(reply).contains("Contact");
    }

    // ─── Menu ────────────────────────────────────────────────────────────

    @Test
    @DisplayName("'menu' triggers full command list")
    void testMenuKeyword() {
        String reply = service.processMessage("menu", null, null);
        assertThat(reply).contains("diet");
        assertThat(reply).contains("workout");
        assertThat(reply).contains("yoga");
        assertThat(reply).contains("sleep");
        assertThat(reply).contains("premium");
    }

    // ─── Default / Fallback ──────────────────────────────────────────────

    @Test
    @DisplayName("Unknown message triggers default fallback reply")
    void testUnknownMessageFallback() {
        String reply = service.processMessage("randomtext123", null, "Abhishek");
        assertThat(reply).contains("didn't catch that");
        assertThat(reply).contains("menu");
    }

    @Test
    @DisplayName("Null body triggers default reply without crash")
    void testNullBodyHandledGracefully() {
        String reply = service.processMessage(null, null, null);
        assertThat(reply).isNotNull();
        assertThat(reply).isNotEmpty();
    }

    @Test
    @DisplayName("Keyword matching is case-insensitive")
    void testCaseInsensitiveMatching() {
        String reply1 = service.processMessage("DIET", null, null);
        String reply2 = service.processMessage("Diet", null, null);
        String reply3 = service.processMessage("diet", null, null);
        assertThat(reply1).isEqualTo(reply3);
        assertThat(reply2).isEqualTo(reply3);
    }
}
