package com.ohd.OnlineHelpDesk.repo;

import com.ohd.OnlineHelpDesk.models.entity.Query;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QueryRepository extends JpaRepository<Query, Long> {
}
