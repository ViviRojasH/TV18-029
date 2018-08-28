import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PMedicoPage } from './p-medico';

@NgModule({
  declarations: [
    PMedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(PMedicoPage),
  ],
})
export class PMedicoPageModule {}
