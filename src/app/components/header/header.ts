import { GenericService } from './../../services/generic.service';
import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { OpcionesMenuPage } from '../../pages/opciones-menu/opciones-menu';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() title;

  text: string;

  constructor(
    private genericService: GenericService,
    private popoverCtrl: PopoverController
  ) {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }

  verOpciones(){
    let popover = this.popoverCtrl.create(OpcionesMenuPage, {}, { cssClass: "clase-Pop" });
    popover.present({
    });
  }
}
