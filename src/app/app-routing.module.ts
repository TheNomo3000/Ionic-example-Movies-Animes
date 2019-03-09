import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimeDetailsComponent } from './animes/anime-details/anime-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'animes',
    component: AnimesComponent
  },
  {
    path: 'anime-details/:id',
    component: AnimeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
