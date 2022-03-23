package com.ohd.OnlineHelpDesk.models.resource;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest {
    String username;
    String password;
}
