import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movie_url = 'https://backend-ygzsyibiue.now.sh/api/v1/movies/';
  private api_key = 'API_KEY';
  private movie_string: string;
  private id: number;

  constructor(private http: HttpClient) { }

   
  /* Get All Movies */
  getAllMovies() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.movie_url);
  }

  /* get One movie using id */
  getMovie(id: number) {
    return this.http.get(this.movie_url +id);
  }




}
