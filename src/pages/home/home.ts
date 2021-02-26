import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  constructor(public navCtrl: NavController) {
  }

}
