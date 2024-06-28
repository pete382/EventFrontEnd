import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoriteModel } from '../models/favorites';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }

  allFavorites:FavoriteModel[] = [];
  url:string = "https://localhost:7277"

  getAll(id:string):Observable<FavoriteModel[]>{
    return this.http.get<FavoriteModel[]>(`${this.url}/api/Favorite/${id}`)
  }

  addFavorite(newFavorite:FavoriteModel):Observable<FavoriteModel>{
    return this.http.post<FavoriteModel>(`${this.url}/api/Favorite`, newFavorite)
  }

  deleteFavorite(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/api/Favorite/${id}`)
  }

}
