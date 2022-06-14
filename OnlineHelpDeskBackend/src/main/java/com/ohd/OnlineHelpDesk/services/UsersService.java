package com.ohd.OnlineHelpDesk.services;

import com.ohd.OnlineHelpDesk.models.entity.PasswordChange;
import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.entity.Users;
import com.ohd.OnlineHelpDesk.models.resource.ForgotPasswordResponse;
import com.ohd.OnlineHelpDesk.models.resource.ResetPasswordResponse;
import com.ohd.OnlineHelpDesk.models.resource.UserResource;
import com.ohd.OnlineHelpDesk.repo.PasswordChangeRepository;
import com.ohd.OnlineHelpDesk.repo.RoleRepository;
import com.ohd.OnlineHelpDesk.repo.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

@Service
public class UsersService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private PasswordChangeRepository passwordChangeRepository;

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

    public Users getUserByRoleId(Long roleId){
        return this.usersRepository.findByRoleId(roleId);
    }
    public ForgotPasswordResponse forgotPassword(String email) {
        Users user = this.usersRepository.findByEmail(email);
        if(user!=null){
            Properties properties = new Properties();

            properties.put("mail.smtp.auth","true");
            properties.put("mail.smtp.starttls.enable","true");
            properties.put("mail.smtp.host","smtp.gmail.com");
            properties.put("mail.smtp.port","587");

            String to = email;//change accordingly
            String from = "onlinehelpdeskskit@gmail.com";//change accordingly
            String password = "Onlinehelpdesk";

            Session session = Session.getInstance(properties, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(from, password);
                }
            });

            //entry in password change table
            PasswordChange passwordChange = new PasswordChange();
            passwordChange.setEmail(user.getEmail());
            passwordChange.setTime(LocalDateTime.now());
            this.passwordChangeRepository.save(passwordChange);


            //compose the message
            try{
                MimeMessage message = new MimeMessage(session);
                message.setFrom(new InternetAddress(from));
                message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
                message.setSubject("Reset password for Online Help Desk");
                message.setText("Please set your password: http://localhost:4200/reset-password/"+passwordChange.getId());

                // Send message
                Transport.send(message);
                System.out.println("message sent successfully....");

            }catch (MessagingException mex) {mex.printStackTrace();}
            return new ForgotPasswordResponse("Email has been sent...");
        }
        return new ForgotPasswordResponse("Enter valid email or signup.");
    }

    public ResetPasswordResponse resetPassword(String id, String new_password) {
        System.out.println(id);
        PasswordChange pc = this.passwordChangeRepository.findByRprId(id);

        System.out.println(pc);
        System.out.println(pc.getEmail());
        Users user = this.usersRepository.findByEmail(pc.getEmail());
        System.out.println(user.getPassword());
        System.out.println(new_password);
        user.setPassword(bCryptPasswordEncoder.encode(new_password));
        System.out.println(user.getPassword());
        this.usersRepository.save(user);

        return new ResetPasswordResponse("Password is successfully changed.");
    }

    public Long getRoleId(Long userId) {
        System.out.println(userId);
        return this.usersRepository.getRoleId(userId);
    }
}
