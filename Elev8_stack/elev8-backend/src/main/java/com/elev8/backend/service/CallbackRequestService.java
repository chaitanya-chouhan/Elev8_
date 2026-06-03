package com.elev8.backend.service;

import com.elev8.backend.model.CallbackRequest;
import com.elev8.backend.repository.CallbackRequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * CallbackRequestService
 * Lombok removed — explicit constructor to fix compilation error.
 */
@Service
public class CallbackRequestService {

    private final CallbackRequestRepository repo;

    // Explicit constructor instead of @RequiredArgsConstructor
    public CallbackRequestService(CallbackRequestRepository repo) {
        this.repo = repo;
    }

    /** Save a new callback request to MySQL */
    public CallbackRequest save(CallbackRequest request) {
        return repo.save(request);
    }

    /** Retrieve all callback requests */
    public List<CallbackRequest> findAll() {
        return repo.findAll();
    }
}
