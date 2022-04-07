package com.ohd.OnlineHelpDesk.services;

import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.entity.Users;
import com.ohd.OnlineHelpDesk.models.resource.UserResource;
import com.ohd.OnlineHelpDesk.repo.RoleRepository;
import com.ohd.OnlineHelpDesk.repo.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public Users addUser(UserResource userResource){
        Users users = new Users(userResource.getName(), userResource.getEmail(), userResource.getPassword(),userResource.getCollegeId());
        Role role = null;
        users.setPassword(bCryptPasswordEncoder.encode(userResource.getPassword()));
        if(roleRepository.getByRoleName("STUDENT")==null){
            Role newRole = new Role("STUDENT","NONE");
            this.roleRepository.save(newRole);
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
