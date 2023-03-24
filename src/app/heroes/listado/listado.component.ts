import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[]=['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){

    
      //this.heroes.shift();
      //const heroeDelete:string[]=[];
      this.heroeBorrado = this.heroes.shift()||'';
 /*      const heroeDelete:string = this.heroes.shift()||'';
      this.heroeBorrado.push(heroeDelete); */
    
  };



}
