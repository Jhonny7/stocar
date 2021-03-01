import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  tiendas_list = [{
    logo: 'https://www.pixelero.com.mx/wp-content/uploads/2013/04/chedraui.png',
    name: 'Chedraui'
  },
  {
   logo: 'https://www.pixelero.com.mx/wp-content/uploads/2013/04/chedraui.png',
   name: 'Cinepolis'
 },
 {
   logo: 'https://www.pixelero.com.mx/wp-content/uploads/2013/04/chedraui.png',
   name: 'Chonita'
 },
 {
   logo: 'https://www.pixelero.com.mx/wp-content/uploads/2013/04/chedraui.png',
   name: 'Don Pollo'
 },
 {
   logo: 'https://www.pixelero.com.mx/wp-content/uploads/2013/04/chedraui.png',
   name: 'Aurrera'
 },
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCrearTarjetaPage');
  }

  closeModal(){
    let cerrar = 'se cerro';
    this.viewCtrl.dismiss({result: cerrar})
  }

  getTiendas(event){
    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.tiendas_list = this.tiendas_list.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  }
