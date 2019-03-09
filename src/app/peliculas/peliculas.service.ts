import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPeliculas } from './IPeliculas.interface';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private _apikey: string = "afcf9b95";
  private _url: string;
  constructor(private http: HttpClient) { }

  searchMovies(title : string, type: string){
    this._url = `http://www.omdbapi.com/?s=${encodeURI(title)}&apikey=${this._apikey}&type=${type}`;
    return this.http.get<IPeliculas>(this._url)
    .pipe( map( results => results['Search']))
  }
  
  getDetails(id: String){
    return this.http.get<IPeliculas>(`http://www.omdbapi.com/?i=${id}`);
  }
}

