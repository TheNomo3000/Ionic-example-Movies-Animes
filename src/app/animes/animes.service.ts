import { Injectable } from '@angular/core';
import gql from 'graphql-tag'
import { IAnimes } from "./IAnimes.interfaces";
import { Apollo } from "apollo-angular";
import { map } from 'rxjs/operators';


const GET_ANIME = gql`
  query ($search: String!, $page: Int! , $perPage: Int!){
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (search : $search) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
`;

const GET_ANIME_DETAILS = gql`
query ($id: Int!){
  Media (id : $id) {
    id
    title {
      romaji
      english
      native
    }
    genres
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    description
    endDate {
      year
      month
      day
    }
    popularity
    coverImage {
      extraLarge
      large
      medium
      color
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class AnimesService {


  constructor(private apolloService : Apollo) { }

  searchAnime(title: string){
    return this.apolloService.watchQuery<IAnimes>({
      query: GET_ANIME,
      variables: {
        search: title,
        page: 1,
        perPage: 1000
      }
    }).valueChanges.pipe( map( results => <IAnimes>results['data']['Page']['media']))
  }

  getDetails(id: string){
    return this.apolloService.watchQuery<IAnimes>({
      query: GET_ANIME_DETAILS,
      variables: {
        id: id
      }
    }).valueChanges.pipe( map( results => <IAnimes>results['data']['Media']))
  }
}
