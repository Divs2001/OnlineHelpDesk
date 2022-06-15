package com.ohd.OnlineHelpDesk.services;

import com.ohd.OnlineHelpDesk.models.entity.Queries;
import com.ohd.OnlineHelpDesk.models.entity.Role;
import com.ohd.OnlineHelpDesk.models.entity.Users;
import com.ohd.OnlineHelpDesk.models.resource.QueryResource;
import com.ohd.OnlineHelpDesk.repo.QueryRepository;
import com.ohd.OnlineHelpDesk.repo.RoleRepository;
import com.ohd.OnlineHelpDesk.repo.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.LinkedHashSet;
import java.util.Properties;
import java.util.Set;

@Service
public class QueryService {

    @Autowired
    private QueryRepository queryRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UsersRepository usersRepository;

    public Queries addQuery(QueryResource queryData) {
        Queries query = new Queries(queryData.getTitle(), queryData.getDescription());
        System.out.println(queryData.getRoleId());
        Role role = this.roleRepository.findById(queryData.getRoleId()).get();
        Users user = this.usersRepository.findById(queryData.getUserId()).get();
        query.setRoles(role);
        query.setUsers(user);
        this.queryRepository.save(query);

        //sending mail to the admin
        Users users = this.usersRepository.findByRoleId(queryData.getRoleId());
        String email = users.getEmail();
        Properties properties = new Properties();

        properties.put("mail.smtp.auth","true");
        properties.put("mail.smtp.starttls.enable","true");
        properties.put("mail.smtp.host","smtp-mail.outlook.com");
        properties.put("mail.smtp.port","587");

        String to = email;//change accordingly
        String from = "onlinehelpdeskskit@outlook.com";//change accordingly
        String password = "OnlineHelpDesk";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });
        //compose the message
        try{
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            message.setSubject("Query: "+queryData.getTitle());
            message.setText("Hi "+users.getName()+",\n" +"Please view the query: http://localhost:4200/login");

            // Send message
            Transport.send(message);
            System.out.println("message sent successfully....");

        }catch (MessagingException mex) {mex.printStackTrace();};
        return query;
    }

    public Set<Queries> getAllQueries(Long userId) {
        return new LinkedHashSet(this.queryRepository.findAllQueries(userId));
    }

    public Set<Queries> getUnresolvedQueries(Long userId) {
        return new LinkedHashSet(this.queryRepository.findUnresolvedQueries(userId));
    }

    public Object getResolvedQueries(long userId) {
        return new LinkedHashSet(this.queryRepository.findResolvedQueries(userId));
    }

    public Object getAllQueriesByRole(long roleId) {
        return new LinkedHashSet(this.queryRepository.getAllQueriesByRole(roleId));
    }

    public Object getUnresolvedQueriesByRole(long roleId) {
        return new LinkedHashSet(this.queryRepository.getUnresolvedQueriesByRole(roleId));
    }

    public Object getReesolvedQueriesByRole(long roleId) {
        return new LinkedHashSet(this.queryRepository.getResolvedQueriesByRole(roleId));
    }

    public Object getQuery(long queryId) {
        return this.queryRepository.getQuery(queryId);
    }

    public Queries addResponse(QueryResource queryData) {
        Queries queries = this.queryRepository.findById(queryData.getQueryId()).get();
        queries.setResponse(queryData.getResponse());
        queries.setType("INACTIVE");
        this.queryRepository.save(queries);

        //sending mail to the user/student
        Users users = this.usersRepository.findById(this.queryRepository.getUserId(queryData.getQueryId())).get();
        String email = users.getEmail();
        Properties properties = new Properties();

        properties.put("mail.smtp.auth","true");
        properties.put("mail.smtp.starttls.enable","true");
        properties.put("mail.smtp.host","smtp-mail.outlook.com");
        properties.put("mail.smtp.port","587");

        String to = email;//change accordingly
        String from = "onlinehelpdeskskit@outlook.com";//change accordingly
        String password = "OnlineHelpDesk";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });
        //compose the message
        try{
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            message.setSubject("Query: "+queryData.getTitle());
            message.setText("Hi "+users.getName()+",\n" +"Please view the response: http://localhost:4200/login"+"\n" +
                    "This is the response: "+ queryData.getResponse());

            // Send message
            Transport.send(message);
            System.out.println("message sent successfully....");

        }catch (MessagingException mex) {mex.printStackTrace();};
        return queries;
    }
}
