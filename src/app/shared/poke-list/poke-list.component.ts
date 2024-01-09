import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  constructor(
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(res => res)
  }
}
