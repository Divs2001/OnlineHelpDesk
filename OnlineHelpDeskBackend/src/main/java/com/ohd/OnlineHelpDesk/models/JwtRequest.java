package com.ohd.OnlineHelpDesk.models;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtRequest {
    String username;
    String password;
}
