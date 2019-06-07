import { Component, OnInit, Input } from '@angular/core';
import { MovieService, Movie } from '../services';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movieList: any;

  ngOnInit() {
    this.movieService.currentMovieList.subscribe((movieList: Movie[]) => {
      this.movieList = movieList;
      console.log(this.movieList)
    }
    )
  }


}
