import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService, Movie } from '../services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  search: String;

  ngOnInit() {
  }

  showMovies() {
    this.movieService.getMovies(this.search)
      .subscribe((data) => data = {
        page: data['page']
      });
  }

}
