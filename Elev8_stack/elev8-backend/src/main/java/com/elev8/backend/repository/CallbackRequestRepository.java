package com.elev8.backend.repository;

import com.elev8.backend.model.CallbackRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * CallbackRequestRepository
 *
 * Spring Data JPA auto-implements all CRUD operations.
 * No extra code needed — Spring generates the SQL at runtime.
 */
@Repository
public interface CallbackRequestRepository extends JpaRepository<CallbackRequest, Long> {
    // Spring Data auto-provides: save(), findAll(), findById(), deleteById(), count() etc.
}
