import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from './pages/home/home';
import { ListPage } from './pages/list/list';
import { TabsPage } from './pages/tabs/tabs';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalCrearTarjetaPage } from './pages-modals/modal-crear-tarjeta/modal-crear-tarjeta';
import { OfertasPage } from './pages/ofertas/ofertas';
import { HeaderComponent } from './components/header/header';
import { OpcionesMenuPage } from './pages/opciones-menu/opciones-menu';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HomePage,
    ListPage,
    ModalCrearTarjetaPage,
    TabsPage,
    OfertasPage,
    HeaderComponent,
    OpcionesMenuPage
  ],
  imports:[
    IonicModule.forRoot(HomePage),
    IonicModule.forRoot(ListPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  entryComponents: [
    HomePage,
    ListPage,
    ModalCrearTarjetaPage,
    TabsPage,
    OfertasPage,
    OpcionesMenuPage
  ],
  exports:[
    HomePage,
    ListPage,
    TabsPage,
    OfertasPage,
    HeaderComponent
  ]
})
export class ComponentsModule {}
