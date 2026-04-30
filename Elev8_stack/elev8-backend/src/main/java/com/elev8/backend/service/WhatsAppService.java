package com.elev8.backend.service;

import org.springframework.stereotype.Service;

/**
 * WhatsAppService
 *
 * Processes incoming WhatsApp messages and returns bot replies.
 *
 * Bot commands (case-insensitive):
 *   hi / hello / start  → Welcome + menu
 *   diet                → Diet plan info
 *   workout             → Workout tips
 *   yoga                → Yoga & meditation tips
 *   sleep               → Sleep / circadian tips
 *   premium             → Premium plans info
 *   contact             → Contact info
 *   subscribe           → Notification subscription info
 *   help                → Command list
 *   anything else       → Default response
 */
@Service
public class WhatsAppService {

    private static final String SITE_URL = "https://YOUR_ELEV8_URL.com";

    public String processMessage(String body, String from, String name) {
        if (body == null) return getDefaultReply(name);
        String msg = body.trim().toLowerCase();

        if (msg.matches("hi|hello|hey|start|hii|helo")) {
            return getWelcomeMessage(name);
        } else if (msg.contains("diet") || msg.contains("food") || msg.contains("nutrition")) {
            return getDietMessage();
        } else if (msg.contains("workout") || msg.contains("exercise") || msg.contains("weight") || msg.contains("gym")) {
            return getWorkoutMessage();
        } else if (msg.contains("yoga") || msg.contains("meditation") || msg.contains("stress")) {
            return getYogaMessage();
        } else if (msg.contains("sleep") || msg.contains("circadian") || msg.contains("rest")) {
            return getSleepMessage();
        } else if (msg.contains("premium") || msg.contains("plan") || msg.contains("pricing") || msg.contains("subscribe")) {
            return getPremiumMessage();
        } else if (msg.contains("contact") || msg.contains("help") || msg.contains("support")) {
            return getContactMessage();
        } else if (msg.contains("calisthenics") || msg.contains("bodyweight")) {
            return getCalisthenicsMessage();
        } else if (msg.matches("menu|options|commands")) {
            return getMenuMessage();
        } else {
            return getDefaultReply(name);
        }
    }

    private String getWelcomeMessage(String name) {
        String n = (name != null && !name.isBlank()) ? name.split(" ")[0] : "there";
        return """
            🏋️ *Welcome to Elev8, %s!*
            
            Your personal wellness assistant is here 💪
            
            Here's what I can help you with:
            
            1️⃣ *diet* — Nutrition & meal plans
            2️⃣ *workout* — Weight & strength training
            3️⃣ *yoga* — Yoga & meditation
            4️⃣ *sleep* — Sleep optimization
            5️⃣ *calisthenics* — Bodyweight training
            6️⃣ *premium* — Our premium plans
            7️⃣ *contact* — Reach our team
            
            Just type any keyword above! 🌟
            
            Visit us: %s
            """.formatted(n, SITE_URL);
    }

    private String getDietMessage() {
        return """
            🥗 *Elev8 Diet & Nutrition*
            
            Our personalized diet plans help you:
            ✅ Lose weight sustainably
            ✅ Build lean muscle
            ✅ Boost energy & focus
            
            📋 *Tips:*
            • Eat protein with every meal (0.8–1g per kg body weight)
            • Drink 3–4L of water daily
            • Avoid processed foods & excess sugar
            • Time your carbs around workouts
            
            🔗 Full diet plans: %s/diet
            
            Reply *menu* for more options.
            """.formatted(SITE_URL);
    }

    private String getWorkoutMessage() {
        return """
            🏋️ *Elev8 Weight Training*
            
            Build strength with our structured programs:
            
            💪 *Beginner (3x/week):*
            Mon: Chest & Triceps
            Wed: Back & Biceps
            Fri: Legs & Shoulders
            
            💪 *Pro Tip:* Progressive overload is the key — increase weight or reps each week.
            
            🔗 Full programs: %s/weight
            
            Reply *calisthenics* for bodyweight training.
            Reply *menu* for more.
            """.formatted(SITE_URL);
    }

    private String getYogaMessage() {
        return """
            🧘 *Elev8 Yoga & Meditation*
            
            Reduce stress, improve flexibility, sleep better:
            
            🌅 *Morning Routine (15 min):*
            • Sun Salutation × 5
            • Child's Pose — 2 min
            • Cat-Cow stretches — 2 min
            • Box breathing — 5 min
            
            🌙 *Night Wind-down:*
            • Legs up the wall — 5 min
            • Progressive muscle relaxation
            
            🔗 Full routines: %s/yoga
            """.formatted(SITE_URL);
    }

    private String getSleepMessage() {
        return """
            😴 *Elev8 Sleep Optimization*
            
            Your circadian rhythm controls everything:
            
            ⏰ *Key habits:*
            • Wake up at the same time daily (even weekends!)
            • Get sunlight within 30 min of waking
            • No screens 1hr before bed
            • Keep bedroom cool (18–20°C)
            • Avoid caffeine after 2 PM
            
            🎯 *Target:* 7–9 hours quality sleep
            
            🔗 Learn more: %s/circadian
            """.formatted(SITE_URL);
    }

    private String getCalisthenicsMessage() {
        return """
            🤸 *Elev8 Calisthenics*
            
            Master your bodyweight! No gym required.
            
            📋 *Beginner Circuit (3 rounds):*
            • Push-ups × 15
            • Bodyweight squats × 20
            • Pull-ups × 5 (or negatives)
            • Plank — 45 seconds
            • Jumping jacks × 30
            
            Rest 60 sec between rounds.
            
            🔗 Full programs: %s/calisthenics
            """.formatted(SITE_URL);
    }

    private String getPremiumMessage() {
        return """
            ⭐ *Elev8 Premium Plans*
            
            🥈 *Starter — ₹999/month*
            Custom workout plan + basic nutrition
            
            🥇 *Pro — ₹2,999/month* ⭐ POPULAR
            Personalized plans + 2 live coaching sessions/month
            
            💎 *Elite — ₹5,999/month*
            1-on-1 coaching + weekly sessions + 24/7 priority support
            
            All plans include 14-day money-back guarantee! 💯
            
            🔗 Sign up: %s/premium
            """.formatted(SITE_URL);
    }

    private String getContactMessage() {
        return """
            📞 *Contact Elev8*
            
            📧 Email: elev8@iiitl.ac.in
            📍 Location: Chak Ganjaria City, Lucknow
            📸 Instagram: @elev8._.fit
            
            💬 *Bot commands:*
            diet | workout | yoga | sleep | calisthenics | premium
            
            🔗 Website: %s
            
            Our team responds within 24 hours! 🙏
            """.formatted(SITE_URL);
    }

    private String getMenuMessage() {
        return """
            📋 *Elev8 Bot Menu*
            
            Type any of these:
            
            🥗 *diet* — Nutrition tips
            🏋️ *workout* — Weight training
            🤸 *calisthenics* — Bodyweight training
            🧘 *yoga* — Yoga & meditation
            😴 *sleep* — Sleep optimization
            ⭐ *premium* — Our plans & pricing
            📞 *contact* — Reach our team
            
            🔗 Website: %s
            """.formatted(SITE_URL);
    }

    private String getDefaultReply(String name) {
        String n = (name != null && !name.isBlank()) ? name.split(" ")[0] : "there";
        return """
            Hey %s! 👋 I didn't catch that.
            
            Type *menu* to see all available commands, or try:
            diet | workout | yoga | sleep | premium | contact
            
            🔗 Visit: %s
            """.formatted(n, SITE_URL);
    }
}
