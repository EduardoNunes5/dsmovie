package br.com.dsmovie.controllers;

import br.com.dsmovie.dto.MovieDTO;
import br.com.dsmovie.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    private MovieService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MovieDTO create(@RequestBody MovieDTO movieDTO){
        return this.service.create(movieDTO);
    }

    @GetMapping
    public Page<MovieDTO> getPaginated(
            @PageableDefault(sort = { "id"}) Pageable pageable){
        return this.service.getPaginated(pageable);
    }

}
