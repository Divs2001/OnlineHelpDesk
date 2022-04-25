package com.ohd.OnlineHelpDesk.controller;

import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.entity.Users;
import com.ohd.OnlineHelpDesk.models.resource.ForgotPasswordResource;
import com.ohd.OnlineHelpDesk.models.resource.ResetPasswordResource;
import com.ohd.OnlineHelpDesk.models.resource.ResetPasswordResponse;
import com.ohd.OnlineHelpDesk.models.resource.UserResource;
import com.ohd.OnlineHelpDesk.repo.RoleRepository;
import com.ohd.OnlineHelpDesk.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin("*")
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

    @GetMapping(value="/getUserByRoleId")
    public Users getUserByRoleId(@RequestParam Long roleId){
        return this.usersService.getUserByRoleId(roleId);
    }

    @PostMapping(value="/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordResource email){
        System.out.println("Entered in controller");
        return ResponseEntity.ok(this.usersService.forgotPassword(email.getEmail()));
    }

    @PutMapping(value="/reset-password")
    public ResetPasswordResponse resetPassword(@RequestBody ResetPasswordResource rpr){
        System.out.println("I am in.");
        return this.usersService.resetPassword(rpr.getId(),rpr.getNew_password());
    }



}
