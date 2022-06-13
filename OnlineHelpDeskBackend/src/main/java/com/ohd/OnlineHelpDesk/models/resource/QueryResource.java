package com.ohd.OnlineHelpDesk.models.resource;

import com.ohd.OnlineHelpDesk.models.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QueryResource {
    private String title;
    private String description;
    private long roleId;
    private long userId;
}
