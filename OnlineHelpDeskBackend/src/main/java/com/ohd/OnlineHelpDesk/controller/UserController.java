package com.ohd.OnlineHelpDesk.controller;

import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.entity.Users;
import com.ohd.OnlineHelpDesk.models.resource.UserResource;
import com.ohd.OnlineHelpDesk.repo.RoleRepository;
import com.ohd.OnlineHelpDesk.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    private UsersService usersService;

    @PostMapping(value = "/addUser")
    public Users addUser(@RequestBody UserResource userResource){
        return this.usersService.addUser(userResource);
    }

    @GetMapping(value="/getAllUsers")
    public List<Users> getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @GetMapping(value = "/getUser")
    public Users getUser(@RequestParam Long id){
        return this.usersService.getUser(id);
    }

}
