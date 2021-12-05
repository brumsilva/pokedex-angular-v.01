import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  
  
  @Input()
  pokemon!: string;

  @Input()
  numero!: number;

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZeros(this.numero); //Usamos this quando a variável está fora do método e dentro da classe do componentes. Elas são irmãs
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroFormatado}.png`;
  }

  leadingZeros(str: string | number, size = 3): string {
    let s = str+"";
    while (s.length < size) s = "0" + s;
    return s;
}
}
