import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  all_movies: any=[];
  upcoming_movies: any;
  search_result: any;
  movie: any;

  constructor(public movieService: MovieService) {

    
    this.movieService.getAllMovies().subscribe(res => {
      this.all_movies = res;
    });


   }

  

  ngOnInit() {
  }

}
