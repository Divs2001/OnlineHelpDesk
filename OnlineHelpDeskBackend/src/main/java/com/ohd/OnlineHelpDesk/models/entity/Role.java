package com.ohd.OnlineHelpDesk.models.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long roleId;
    private String roleName;
    private String domain;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "roles")
    @JsonIgnore
    private Set<Users> user = new HashSet<>();

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "roles")
    @JsonIgnore
    private Set<Queries> query = new HashSet<>();

    public Role(String roleName, String domain) {
        this.roleName = roleName;
        this.domain = domain;
    }
}
