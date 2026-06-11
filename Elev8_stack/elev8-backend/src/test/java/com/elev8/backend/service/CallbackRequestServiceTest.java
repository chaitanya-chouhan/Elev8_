package com.elev8.backend.service;

import com.elev8.backend.model.CallbackRequest;
import com.elev8.backend.repository.CallbackRequestRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

/**
 * Unit tests for CallbackRequestService.
 * Uses Mockito to mock the repository — no database required.
 */
@ExtendWith(MockitoExtension.class)
class CallbackRequestServiceTest {

    @Mock
    private CallbackRequestRepository repo;

    @InjectMocks
    private CallbackRequestService service;

    private CallbackRequest sampleRequest;

    @BeforeEach
    void setUp() {
        sampleRequest = new CallbackRequest();
        sampleRequest.setFirstName("Prakhar");
        sampleRequest.setLastName("Gupta");
        sampleRequest.setEmail("prakhar@example.com");
        sampleRequest.setContact("+911234567890");
        sampleRequest.setHealthGoals("Overall Wellness");
        sampleRequest.setDescription("Looking for a custom plan.");
    }

    @Test
    @DisplayName("save() delegates to repository and returns the saved entity")
    void testSaveDelegatesToRepository() {
        // Simulate DB assigning an ID and returning the saved object
        CallbackRequest savedWithId = new CallbackRequest();
        savedWithId.setId(1L);
        savedWithId.setFirstName("Prakhar");
        savedWithId.setLastName("Gupta");
        savedWithId.setEmail("prakhar@example.com");
        savedWithId.setContact("+911234567890");

        when(repo.save(any(CallbackRequest.class))).thenReturn(savedWithId);

        CallbackRequest result = service.save(sampleRequest);

        // Verify the returned object has the DB-assigned ID
        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getFirstName()).isEqualTo("Prakhar");

        // Verify repo.save was called exactly once
        verify(repo, times(1)).save(sampleRequest);
    }

    @Test
    @DisplayName("findAll() returns all records from repository")
    void testFindAllReturnsAllRecords() {
        CallbackRequest r1 = new CallbackRequest();
        r1.setFirstName("Soham");
        r1.setEmail("soham@example.com");

        CallbackRequest r2 = new CallbackRequest();
        r2.setFirstName("Himanshu");
        r2.setEmail("himanshu@example.com");

        when(repo.findAll()).thenReturn(List.of(r1, r2));

        List<CallbackRequest> results = service.findAll();

        assertThat(results).hasSize(2);
        assertThat(results.get(0).getFirstName()).isEqualTo("Soham");
        assertThat(results.get(1).getFirstName()).isEqualTo("Himanshu");
        verify(repo, times(1)).findAll();
    }

    @Test
    @DisplayName("findAll() returns empty list when no records exist")
    void testFindAllReturnsEmptyList() {
        when(repo.findAll()).thenReturn(List.of());

        List<CallbackRequest> results = service.findAll();

        assertThat(results).isEmpty();
    }

    @Test
    @DisplayName("save() is called with the exact request object passed in")
    void testSavePassesCorrectObjectToRepo() {
        when(repo.save(any(CallbackRequest.class))).thenReturn(sampleRequest);

        service.save(sampleRequest);

        // Verify the exact object was passed to the repo
        verify(repo).save(sampleRequest);
        verifyNoMoreInteractions(repo);
    }
}
