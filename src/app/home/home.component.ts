import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
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

  constructor(public movieService: MovieService,private ngxService: NgxUiLoaderService) {

    
    this.movieService.getAllMovies().subscribe(res => {
      this.ngxService.start();
      this.all_movies = res;
      this.ngxService.stop();
    });


   }

  

  ngOnInit() {
  }

}
