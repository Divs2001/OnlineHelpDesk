package com.ohd.OnlineHelpDesk.services;

import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.entity.Users;
import com.ohd.OnlineHelpDesk.models.resource.UserResource;
import com.ohd.OnlineHelpDesk.repo.RoleRepository;
import com.ohd.OnlineHelpDesk.repo.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class UsersService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UsersRepository usersRepository;

    public Users addUser(UserResource userResource){
        Users users = new Users(userResource.getName(), userResource.getEmail(), userResource.getPassword(),userResource.getCollegeId());
        Role role = null;
        if(roleRepository.getByRoleName("STUDENT")==null){
            Role newRole = new Role("STUDENT","NONE");
            roleRepository.save(newRole);
        }
        role = roleRepository.getByRoleName("STUDENT");
        users.setRoles(role);
        usersRepository.save(users);
        return users;
    }

    public List<Users> getAllUsers(){
        return this.usersRepository.findAll();
    }

    public Users getUser(Long id) {
        return this.usersRepository.findById(id).get();
    }

}
