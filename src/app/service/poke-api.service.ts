import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      //tap: Get data per data and use it's information to do something else without change the original value.
      tap(res => res),
      tap(res => {
        res.results.map( (resPokemon: any) => {

          this.apiGetPokemons(resPokemon.url).subscribe(
            res => resPokemon.status = res
          );

        })
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
