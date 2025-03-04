import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  pokemon: Pokemon = {
    id: 0,
    name: 'Desconocido',
    sprites: {
      front_default: ''
    },
    types: [],
    height: 0,
    weight: 0
  };

  pokemonType: string = 'No disponible';
  pokemonImg: string = '';

  constructor(
    private pokemonService: PokemonService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(params => {
      this.getPokemon(params['id']);
    });
  }

  ngOnInit(): void {}

  getPokemon(id: number): void {
    this.pokemonService.getPokemons(id).subscribe({
      next: (respuesta: Pokemon) => {
        this.pokemon = respuesta;
        this.pokemonImg = respuesta.sprites.front_default || 'assets/default-image.png';
        this.pokemonType = respuesta.types?.[0]?.type?.name || 'No disponible'; 
      },
      error: (error) => {
        console.error('Error al obtener el Pokémon:', error);
      }
    });
  }
}
