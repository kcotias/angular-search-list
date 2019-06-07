import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  search: string;

  ngOnInit() {
  }

  searchMovies() {
    this.movieService.searchMovies(this.search)
  }

}
