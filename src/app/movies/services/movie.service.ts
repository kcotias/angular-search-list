import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})


export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(search: string): any {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=a80a7213ccea6ac0a1808fefae0d65ad&language=en-US&query=${search}&page=1&include_adult=false`);
  }

}

