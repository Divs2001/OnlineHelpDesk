package com.ohd.OnlineHelpDesk.controller;

import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.resource.DomainResource;
import com.ohd.OnlineHelpDesk.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path="/roles")
@CrossOrigin("*")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping(path="/getRoles")
    public ResponseEntity<?> getRoles(){
        return ResponseEntity.ok(this.roleService.getRoles());
    }

    @GetMapping(path="/getRole")
    public ResponseEntity<?> getRole(@RequestParam long roleId){
        return ResponseEntity.ok(this.roleService.getRole(roleId));
    }

}
