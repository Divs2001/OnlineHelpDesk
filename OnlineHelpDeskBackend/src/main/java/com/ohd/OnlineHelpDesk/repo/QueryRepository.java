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

    @Query(value="SELECT q from Queries q where q.roles.roleId = :roleId")
    Set<Queries> getAllQueriesByRole(long roleId);

    @Query(value="SELECT q from Queries q where q.type = 'ACTIVE' and q.roles.roleId = :roleId")
    Set<Queries> getUnresolvedQueriesByRole(long roleId);

    @Query(value="SELECT q from Queries q where q.type = 'INACTIVE' and q.roles.roleId = :roleId")
    Set<Queries> getResolvedQueriesByRole(long roleId);

    @Query(value = "Select q from Queries q where q.queryId = :queryId")
    Queries getQuery(long queryId);

    @Query(value = "SELECT q.users.id from Queries q where q.queryId = :queryId")
    Long getUserId(long queryId);
}
