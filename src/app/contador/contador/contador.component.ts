import { Component } from '@angular/core';


@Component({

    selector:'app-contador',
    template:`
        <h1>{{ titulo }}</h1>

        <h3>La base es <span>{{base}}</span></h3>
        <!-- <input (keyup)="onKey($event)" type="text" name="" value="{{base}}" id=""> -->
        <button (click)="acumular(base)" >+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)" >-{{base}}</button>


    `
})

export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    acumular(valor:number) {
      this.numero += valor;
    }
  
    onKey(event:any){
      this.base= parseInt(event.target.value)
    }
}