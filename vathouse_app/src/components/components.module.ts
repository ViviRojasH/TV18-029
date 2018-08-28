import { NgModule } from '@angular/core';
import { MostrarComponent } from './mostrar/mostrar';
import { ProfileEditorComponent } from './profile-editor/profile-editor';
@NgModule({
	declarations: [MostrarComponent,
    ProfileEditorComponent],
	imports: [],
	exports: [MostrarComponent,
    ProfileEditorComponent]
})
export class ComponentsModule {}
