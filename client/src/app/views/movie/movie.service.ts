import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends CrudService<Movie, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'api/movies')
  }
}
