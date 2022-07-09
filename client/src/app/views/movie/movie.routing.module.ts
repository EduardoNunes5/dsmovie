import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieChangeComponent } from './movie-change/movie-change.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: { title: 'Filmes' }
  },
  {
    path: 'add',
    component: MovieChangeComponent,
    data: { title: 'Cadastrar Filme' }
  },
  {
    path: 'edit/:itemId',
    component: MovieChangeComponent,
    data: { title: 'Editar Filme' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
