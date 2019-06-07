import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [MovieComponent, MovieListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MovieComponent,
    MovieListComponent
  ]
})
export class MoviesModule { }
