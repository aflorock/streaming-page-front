import { MoviesService } from './../services/movies.service';
import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Movie } from '../services/Movie';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  movies: any = [];
  totalMovies: number;
  public displayedColumns = ['url','title', 'description', 'programType', 'releaseYear'];
  public dataSource = new MatTableDataSource<Movie>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
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

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
