import { Component } from '@angular/core';

/**
 * Generated class for the MostrarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mostrar',
  templateUrl: 'mostrar.html'
})
export class MostrarComponent {

  text: string;

  constructor() {
    console.log('Hello MostrarComponent Component');
    this.text = 'Hello World';
  }

}
