import { Component, OnInit } from '@angular/core';
import { AnimesService } from './animes.service';
import { Observable } from 'rxjs';
import { IAnimes } from './IAnimes.interfaces';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
})
export class AnimesComponent implements OnInit {
  title: string;
  results: Observable<IAnimes>

  constructor(private animeService : AnimesService) { }

  ngOnInit() {}

  searchChanged(title: string) : void{
    this.results = this.animeService.searchAnime(this.title);
  }
}
