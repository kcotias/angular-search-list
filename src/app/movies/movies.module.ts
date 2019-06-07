import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MovieService } from './services';


@NgModule({
  declarations: [
    MovieListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot(),
    FormsModule

  ],
  exports: [
    MovieListComponent,
    HeaderComponent
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
