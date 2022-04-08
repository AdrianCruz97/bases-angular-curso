import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';
  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    console.log(heroeBorrado);
    return this.heroeBorrado = heroeBorrado;
  }
}
