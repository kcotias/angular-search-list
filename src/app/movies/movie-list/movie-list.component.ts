import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  showMovies(search: string) {
    this.movieService.getMovies(search)
      .subscribe((data) => this.data = {
        page: data['page']
      });
  }

}
