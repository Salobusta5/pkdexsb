import { Component,Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  
    @Input({required:true})solicitarImagen:string = ""//1
    @Output() clickPokemon = new EventEmitter<number>(); 
    //onNextPokemon() {
      //this.clickPokemon.emit(); 
    //}
    anteriorPokemon(){//anterior pokemon con la cruz, izquierda
    this.clickPokemon.emit(-1);
    }
    
    siguientePokemon(){//siguiente pokemon con la cruz, derecha
      this.clickPokemon.emit(1);
    }
    funcionArriba() {//siguiente pokemoncon la cruz, arriba
      this.clickPokemon.emit(1);
    }
    
    funcionAbajo() {//anterior pokemon con la cruz, abajo
      this.clickPokemon.emit(-1);
    }
    @Output() resetBars = new EventEmitter<number>();

    //Method called when searchPokemon is called
    ngOnChanges(changes: SimpleChanges): void {
        if(changes['solicitarImagen']){
            this.ataque = 30;  // Reset to initial value using disminuirAtaque/aumentarDefensa
            this.defensa = 0; // Reset to initial value using disminuirAtaque/aumentarDefensa
        }
    }
    ataque: number = 30;  
    defensa: number = 0; 
  
    disminuirAtaque() {
      if (this.ataque > 0) {
        this.ataque -= 10;
      } else {
        alert("Ya no tienes ataques :(, Cambia de pokemon"); 
      }
    }
  
    aumentarDefensa() {
      if (this.defensa < 43) {
        this.defensa += 10;
      } else {
        alert("Tu defensa ya esta al 100%, no tienes más"); 
      }
    }

    
  }

