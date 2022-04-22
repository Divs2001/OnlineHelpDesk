package com.ohd.OnlineHelpDesk.repo;

import com.ohd.OnlineHelpDesk.models.entity.Queries;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import java.util.Set;

@Repository
public interface QueryRepository extends JpaRepository<Queries, Long> {
    @Query(value="SELECT q from Queries q where q.type = 'ACTIVE' and q.users.id = :userId")
    Set<Queries> findUnresolvedQueries(Long userId);

    @Query(value="SELECT q from Queries q where q.users.id = :userId")
    Set<Queries> findAllQueries(Long userId);

    @Query(value="SELECT q from Queries q where q.type = 'INACTIVE' and q.users.id = :userId")
    Set<Queries> findResolvedQueries(Long userId);
}
