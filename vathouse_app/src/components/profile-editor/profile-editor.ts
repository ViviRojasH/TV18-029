import { Component } from '@angular/core';

/**
 * Generated class for the ProfileEditorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-editor',
  templateUrl: 'profile-editor.html'
})
export class ProfileEditorComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileEditorComponent Component');
    this.text = 'Hello World';
  }

}
