import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';
import { ActivatedRoute } from '@angular/router';
import { IAnimes } from '../IAnimes.interfaces';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss'],
})
export class AnimeDetailsComponent implements OnInit {
  content;

  constructor(private animeService: AnimesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.animeService.getDetails(id).subscribe( res => {
      this.content = res;
      console.log(res);
    })
  }

}
