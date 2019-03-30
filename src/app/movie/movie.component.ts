import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../movie.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: any;
  constructor(private router: ActivatedRoute,private ngxService: NgxUiLoaderService, private movieService: MovieService) { }

  ngOnInit() {
    this.ngxService.start();
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.movieService.getMovie(id).subscribe(res => {
        this.movie = res;
      });
    });
    this.ngxService.stop();
  }
}
