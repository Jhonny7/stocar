import { HeaderColor } from "@ionic-native/header-color";
import { GenericService } from "./../../services/generic.service";
import { LocalStorageEncryptService } from "./../../services/local-storage-encrypt.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  App,
  ViewController,
  Events
} from "ionic-angular";
import { environment } from "../../../environment/environment";

@Component({
  selector: "page-opciones-menu",
  templateUrl: "opciones-menu.html"
})
export class OpcionesMenuPage {
  public user: any = null;

  public env: any = environment;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private localStorageEncryptService: LocalStorageEncryptService,
    private alertCtrl: AlertController,
    private app: App,
    private viewCtrl: ViewController,
    private events: Events,
    private genericService: GenericService,
    private headerColor: HeaderColor
  ) {
    this.user = this.localStorageEncryptService.getFromLocalStorage(
      "userSession"
    );

    this.events.subscribe("reloadUser", data => {
      try {
        this.user = this.localStorageEncryptService.getFromLocalStorage(
          "userSession"
        );
      } catch (error) {}
    });
  }

  ionViewDidLoad() {}

  change(opt) {
    switch (opt) {
      case 1:
        this.localStorageEncryptService.setToLocalStorage("theme", "#3b64c0");
        this.localStorageEncryptService.setToLocalStorage("primary", "primary");
        this.headerColor.tint("#3b64c0");
        break;
      case 2:
        this.localStorageEncryptService.setToLocalStorage("theme", "#be3b3b");
        this.localStorageEncryptService.setToLocalStorage(
          "primary",
          "primary2"
        );
        this.headerColor.tint("#be3b3b");
        break;
      case 3:
        this.localStorageEncryptService.setToLocalStorage("theme", "#3bb8be");
        this.localStorageEncryptService.setToLocalStorage(
          "primary",
          "primary3"
        );
        this.headerColor.tint("#3bb8be");
        break;
      case 4:
        this.localStorageEncryptService.setToLocalStorage("theme", "#74be3b");
        this.localStorageEncryptService.setToLocalStorage(
          "primary",
          "primary4"
        );
        this.headerColor.tint("#74be3b");
        break;
      case 5:
        this.localStorageEncryptService.setToLocalStorage("theme", "#292929");
        this.localStorageEncryptService.setToLocalStorage(
          "primary",
          "primary5"
        );
        this.headerColor.tint("#292929");
        break;
      case 6:
        this.localStorageEncryptService.setToLocalStorage("theme", "#F07C1B");
        this.localStorageEncryptService.setToLocalStorage(
          "primary",
          "primary6"
        );
        this.headerColor.tint("#F07C1B");
        break;
    }
    this.events.publish("changeColor");
  }
}
