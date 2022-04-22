package com.ohd.OnlineHelpDesk.repo;

import com.ohd.OnlineHelpDesk.models.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsersRepository extends JpaRepository<Users, Long> {
//    @Query(value = "select * from users where email = :email",nativeQuery = true)
    public Users findByEmail(String email);

    @Query(value="select * from users where role_id= :roleId",nativeQuery = true)
    public Users findByRoleId(Long roleId);
}
