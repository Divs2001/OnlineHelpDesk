package com.ohd.OnlineHelpDesk.models.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ohd.OnlineHelpDesk.models.resource.Authority;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Users implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String password;
    private String collegeId;
    private String department; //by default null
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="role_id")
    @JsonIgnore
    private Role roles;

    public Users(String name, String email, String password, String collegeId) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.collegeId = collegeId;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<Authority> set = new HashSet<>();
        set.add(new Authority(this.roles.getRoleName()));
        return set;
    }

       @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
//divyansh - student
//ayush - student
//gautam - s
//beniwal - gym
//chotmal - mess