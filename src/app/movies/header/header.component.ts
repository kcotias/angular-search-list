import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
