import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon';


interface PokemonData {
  position: number;
  image: string;
  name: string;
}

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PokeTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name'];
  data: PokemonData[] = [];
  dataSource = new MatTableDataSource<PokemonData>(this.data);
  pokemons = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getPokemons();
  }

  getPokemons(): void {
    for (let i = 1; i <= 200; i++) {
      this.pokeService.getPokemons(i).subscribe({
        next: (pokemon: Pokemon) => {
          const pokemonData: PokemonData = {
            position: pokemon.id,
            image: pokemon.sprites.front_default,
            name: pokemon.name
          };

          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<PokemonData>(this.data);
          this.dataSource.paginator = this.paginator;
        },
        error: (error) => {
          console.error('Error al obtener el Pokémon:', error);
        }
      });
    }
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row: PokemonData): void {
    this.router.navigateByUrl(`/pokeDetail/${row.position}`);
  }

}
