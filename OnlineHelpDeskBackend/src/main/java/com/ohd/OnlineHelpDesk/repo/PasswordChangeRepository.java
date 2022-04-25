package com.ohd.OnlineHelpDesk.repo;

import com.ohd.OnlineHelpDesk.models.entity.PasswordChange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PasswordChangeRepository extends JpaRepository<PasswordChange, String> {

    @Query(value="select * from password_change where id= :id", nativeQuery = true)
    PasswordChange findByRprId(String id);

}
