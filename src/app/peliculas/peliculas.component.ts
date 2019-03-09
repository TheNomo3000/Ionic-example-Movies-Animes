import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';
import { Observable } from 'rxjs';
import { IPeliculas } from './IPeliculas.interface';

@Component({
  selector: 'app-pelis',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent implements OnInit {
  results: Observable<IPeliculas>;
  term: string =  '';
  type: string = '';

  constructor(private peliculasServicio: PeliculasService) { }

  ngOnInit() {
    
  }

  searchChanged() : void{
    this.results = this.peliculasServicio.searchMovies(this.term, this.type);
  }

}
