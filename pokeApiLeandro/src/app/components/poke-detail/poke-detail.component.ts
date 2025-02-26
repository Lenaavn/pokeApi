import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    );
  }

  ngOnInit(): void {}

  getPokemon(id: number) {
    this.pokemonService.getPokemons(id).subscribe(
      respuesta => {
        this.pokemon = respuesta;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = respuesta.types[0].type.name;
      },
      error => {
        console.log(error);
      }
    );
  }
}
