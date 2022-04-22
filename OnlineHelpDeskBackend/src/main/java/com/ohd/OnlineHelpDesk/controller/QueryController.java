package com.ohd.OnlineHelpDesk.controller;

import com.ohd.OnlineHelpDesk.models.entity.Queries;
import com.ohd.OnlineHelpDesk.models.resource.QueryResource;
import com.ohd.OnlineHelpDesk.services.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/query")
@CrossOrigin("*")
public class QueryController {
    @Autowired
    private QueryService queryService;

    @PostMapping(path="/addQuery")
    public Queries addQuery(@RequestBody QueryResource queryData){
        return this.queryService.addQuery(queryData);
    }

    @GetMapping(path="/getAllQueries")
    public ResponseEntity<?> getAllQueries(@RequestParam long userId){
        return ResponseEntity.ok(this.queryService.getAllQueries(userId));
    }

    @GetMapping(path="/getUnresolvedQueries")
    public ResponseEntity<?> getUnresolvedQueries(@RequestParam long userId){
        return ResponseEntity.ok(this.queryService.getUnresolvedQueries(userId));
    }

    @GetMapping(path="/getResolvedQueries")
    public ResponseEntity<?> getResolvedQueires(@RequestParam long userId){
        return ResponseEntity.ok(this.queryService.getResolvedQueries(userId));
    }
}
