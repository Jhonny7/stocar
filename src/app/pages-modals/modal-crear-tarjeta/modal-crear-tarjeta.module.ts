import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCrearTarjetaPage } from './modal-crear-tarjeta';

@NgModule({
  declarations: [
    ModalCrearTarjetaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCrearTarjetaPage),
  ],
})
export class ModalCrearTarjetaPageModule {}
