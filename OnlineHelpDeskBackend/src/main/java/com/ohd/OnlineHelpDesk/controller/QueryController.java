package com.ohd.OnlineHelpDesk.controller;

import com.ohd.OnlineHelpDesk.models.entity.Query;
import com.ohd.OnlineHelpDesk.models.resource.QueryResource;
import com.ohd.OnlineHelpDesk.services.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(path="/query")
public class QueryController {
    @Autowired
    private QueryService queryService;

    @PostMapping(path="/addQuery")
    public Query addQuery(@RequestBody QueryResource queryData){
        return this.queryService.addQuery(queryData);
    }
}
