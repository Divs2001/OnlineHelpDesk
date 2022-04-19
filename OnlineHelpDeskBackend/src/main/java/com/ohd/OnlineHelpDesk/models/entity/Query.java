package com.ohd.OnlineHelpDesk.models.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Query {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long queryId;
    private String title;
    //ACTIVE INACTIVE // by default every quiz will be active before getting resolved
    private String type = "ACTIVE";
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="role_id")
    @JsonIgnore
    private Role roles;

    public Query(String title, String description){
        this.title = title;
        this.description = description;
    }
}
