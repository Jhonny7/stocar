import { LoadingService } from './../../services/loading.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private loadingService: LoadingService) {
      /* this.loadingService.show("Espere");
      setTimeout(() => {
        this.loadingService.hide();
      }, 1000); */
  }

}
