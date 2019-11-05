package ru.shestakova.api.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(
    path = "/statistics",
    produces = MediaType.APPLICATION_JSON_VALUE
)
@AllArgsConstructor
@CrossOrigin
public class StatisticsController {

}
