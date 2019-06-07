import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  declarations: [MovieComponent, MovieListComponent],
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot()

  ],
  exports: [
    MovieComponent,
    MovieListComponent,

  ]
})
export class MoviesModule { }
