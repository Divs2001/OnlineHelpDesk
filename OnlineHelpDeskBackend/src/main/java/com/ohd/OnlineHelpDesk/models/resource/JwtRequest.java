package com.ohd.OnlineHelpDesk.models.resource;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest {
    String email;
    String password;
}
