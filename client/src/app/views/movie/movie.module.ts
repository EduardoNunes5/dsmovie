import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieChangeComponent } from './movie-change/movie-change.component';
import { MovieRoutingModule } from './movie.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieService } from './movie.service';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieChangeComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
