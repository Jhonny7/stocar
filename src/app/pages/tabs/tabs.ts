import { GenericService } from './../../services/generic.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OfertasPage } from '../ofertas/ofertas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tabsPages:any = {
    home: HomePage,
    ofertas: OfertasPage
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private genericService: GenericService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
