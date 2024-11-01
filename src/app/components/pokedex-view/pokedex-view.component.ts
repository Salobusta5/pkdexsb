import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonId: number = 0;
  pokemonImagen: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`;
//onNextPokemon() { 
  //  this.pokemonId++;
   // this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`;
//  }
handelPokemon(event: number){
  this.pokemonId += event;
  this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`;
}
searchPokemon() {
  const pokemonNumberInput = document.getElementById('pokemonNumberInput') as HTMLInputElement;
  const enteredNumber = parseInt(pokemonNumberInput.value, 10);

  if (!isNaN(enteredNumber)) {
    if (enteredNumber >= 1 && enteredNumber <= 1025) { // Check if the number is within the valid range
      this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${enteredNumber}.png`;
    } else {
      alert('Ese pokemon no existe 🤦‍♂️. Solo hay 1-1025.');
    }
  } else {
    alert('Ingresa algun numero 🤦‍♀️');
  }
}

}
