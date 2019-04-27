package com.server.web

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HomeController {

      @RequestMapping(path = ["/hello"])
      fun index(): String = "Hello"

}