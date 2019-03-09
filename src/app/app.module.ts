import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AnimesComponent } from './animes/animes.component';
import { ApolloModule, Apollo} from 'apollo-angular';
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AnimeDetailsComponent } from './animes/anime-details/anime-details.component';

@NgModule({
  declarations: [AppComponent,PeliculasComponent, AnimesComponent, AnimeDetailsComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo : Apollo, httpLink: HttpLink){
    apollo.create({
      link: httpLink.create({ uri: 'https://graphql.anilist.co'}),
      cache: new InMemoryCache()
    })
  }
}
