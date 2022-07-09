package br.com.dsmovie.services;

import br.com.dsmovie.dto.MovieDTO;
import br.com.dsmovie.entities.Movie;
import br.com.dsmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Transactional
    public MovieDTO create(MovieDTO movieDTO){
        Movie movie = new Movie();
        movie.setTitle(movieDTO.getTitle());
        movieDTO.setDescription(movieDTO.getDescription());
        movie = this.repository.save(movie);
        return new MovieDTO(movie);
    }

    @Transactional(readOnly = true)
    public Page<MovieDTO> getPaginated(Pageable pageable){
        return this.repository.findAll(pageable)
                .map(movie -> new MovieDTO(movie));
    }
}
