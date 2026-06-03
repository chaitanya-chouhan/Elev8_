package com.elev8.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * CallbackRequest — JPA Entity
 * Maps to the MySQL table `callback_requests`.
 * Lombok removed — explicit getters/setters to avoid annotation processing issues.
 */
@Entity
@Table(name = "callback_requests")
public class CallbackRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 80)
    private String firstName;

    @Column(nullable = false, length = 80)
    private String lastName;

    @Column(nullable = false, length = 150)
    private String email;

    @Column(nullable = false, length = 20)
    private String contact;

    @Column(length = 100)
    private String healthGoals;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    // ── Getters ──────────────────────────────────────────────

    public Long getId()             { return id; }
    public String getFirstName()    { return firstName; }
    public String getLastName()     { return lastName; }
    public String getEmail()        { return email; }
    public String getContact()      { return contact; }
    public String getHealthGoals()  { return healthGoals; }
    public String getDescription()  { return description; }
    public LocalDateTime getCreatedAt() { return createdAt; }

    // ── Setters ──────────────────────────────────────────────

    public void setId(Long id)                  { this.id = id; }
    public void setFirstName(String firstName)   { this.firstName = firstName; }
    public void setLastName(String lastName)     { this.lastName = lastName; }
    public void setEmail(String email)           { this.email = email; }
    public void setContact(String contact)       { this.contact = contact; }
    public void setHealthGoals(String healthGoals) { this.healthGoals = healthGoals; }
    public void setDescription(String description) { this.description = description; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
