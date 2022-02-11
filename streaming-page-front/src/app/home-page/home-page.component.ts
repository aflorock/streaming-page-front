import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Movie } from '../services/Movie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies: any = [];
  totalMovies: number;
  public displayedColumns = ['imagen','titulo', 'descripcion', 'tipo', 'ano'];
  public dataSource = new MatTableDataSource<Movie>();

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe((result: any) => {
        this.dataSource.data = result.entries as Movie[];
        console.log(this.dataSource.data)
      },
        err => {
          console.log(err);
        })
  }

}
