package com.ohd.OnlineHelpDesk.services;

import com.ohd.OnlineHelpDesk.models.entity.Users;
import com.ohd.OnlineHelpDesk.repo.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Users users = this.usersRepository.findByEmail(email);

        if(users==null){
            System.out.println("User not found");
            throw new UsernameNotFoundException("No user found !!");
        }

        return users;
    }
}
