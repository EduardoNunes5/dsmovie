import { HttpParams } from '@angular/common/http';
import { Page } from './../../../shared/model/page';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Page<Movie> = new Page<Movie>();

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    public router: Router,) { }

  ngOnInit(): void {
    this.performSearch(0, 10)
  }

  private performSearch(pageNumber: number, pageSize: number): void {
    const p = new HttpParams();
    p.set('size', pageNumber).set('page', pageNumber);
    this.movieService.getPaginated({params: p}).subscribe(p => {
      this.movies = p;
    })
  }

}
