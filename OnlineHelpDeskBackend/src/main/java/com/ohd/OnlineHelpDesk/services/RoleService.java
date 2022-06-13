package com.ohd.OnlineHelpDesk.services;

import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.resource.DomainResource;
import com.ohd.OnlineHelpDesk.repo.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    //select all domains except for student one
    public Set<Role> getRoles() {
        return new LinkedHashSet(this.roleRepository.findAllExceptNone());
    }

    public Role getRole(long roleId) {
        return this.roleRepository.findById(roleId).get();
    }
}
