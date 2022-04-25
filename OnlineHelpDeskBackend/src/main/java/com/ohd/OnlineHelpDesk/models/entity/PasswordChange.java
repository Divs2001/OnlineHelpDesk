package com.ohd.OnlineHelpDesk.models.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@AllArgsConstructor
//@NoArgsConstructor
public class PasswordChange {
    @Id
    private String id;
    private String email;
    private LocalDateTime time;

    public PasswordChange(){
        UUID uuid = UUID.randomUUID();
        id = uuid.toString();
    }

}