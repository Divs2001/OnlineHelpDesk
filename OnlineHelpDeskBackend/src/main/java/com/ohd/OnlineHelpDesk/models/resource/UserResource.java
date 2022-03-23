package com.ohd.OnlineHelpDesk.models.resource;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResource {
    private String name;
    private String email;
    private String password;
    private String collegeId;
}
