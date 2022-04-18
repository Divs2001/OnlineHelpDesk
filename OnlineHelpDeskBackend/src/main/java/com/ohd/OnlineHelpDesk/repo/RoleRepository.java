package com.ohd.OnlineHelpDesk.repo;

import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.resource.DomainResource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query(value = "select * from role  where role_name = :roleName", nativeQuery = true)
    public Role getByRoleName(String roleName);
    @Query(value="select domain from role", nativeQuery = true)
    public Set<String> getDomains();
}
