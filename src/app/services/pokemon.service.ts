import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemon();
  }

  async carregarPokemon() {
    const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=898').toPromise();

    this.pokemons = requisicao.results;
  }
}
