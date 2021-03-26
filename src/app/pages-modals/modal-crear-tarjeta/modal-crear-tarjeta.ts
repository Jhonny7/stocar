import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GenericService } from '../../services/generic.service';

/**
 * Generated class for the ModalCrearTarjetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-crear-tarjeta',
  templateUrl: 'modal-crear-tarjeta.html',
})
export class ModalCrearTarjetaPage {
  texto:any;
  searchQuery: string = '';
  tiendas_list = [];
  

  showTiendas(){
    let url = '../../../assets/getTiendas.json';
   this.genericService.sendGetRequest(url).subscribe(data => {
     this.tiendas_list = data;
     
   })
   console.log('holas');
   
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public genericService: GenericService) {
    this.showTiendas()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCrearTarjetaPage');
  }

  closeModal(){
    let cerrar = 'se cerro';
    this.viewCtrl.dismiss({result: cerrar})
  }

  getTiendas(ev){
      // Reset items back to all of the items
     
      this.showTiendas();

    // set val to the value of the searchbar
    const val = ev.target.value;

   setTimeout(() => {
    if (val && val.trim() != '') {
      this.tiendas_list = this.tiendas_list.filter((item) => {
        
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
   }, 10);
    
  }
  }
