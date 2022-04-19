package com.ohd.OnlineHelpDesk.services;

import com.ohd.OnlineHelpDesk.models.entity.Query;
import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.resource.QueryResource;
import com.ohd.OnlineHelpDesk.repo.QueryRepository;
import com.ohd.OnlineHelpDesk.repo.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class QueryService {

    @Autowired
    private QueryRepository queryRepository;

    @Autowired
    private RoleRepository roleRepository;

    public Query addQuery(QueryResource queryData) {
        Query query = new Query(queryData.getTitle(), queryData.getDescription());
        System.out.println(queryData.getRoleId());
        Role role = this.roleRepository.findById(queryData.getRoleId()).get();
        query.setRoles(role);
        this.queryRepository.save(query);
        return query;
    }
}
