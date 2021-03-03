import { HeaderColor } from '@ionic-native/header-color';
import { GenericService } from './services/generic.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AlertaService } from './services/alerta.service';
import { LoadingService } from './services/loading.service';
import { LocalStorageEncryptService } from './services/local-storage-encrypt.service';
import { ValidationService } from './services/validation.service';

@NgModule({
  providers:[
    AlertaService,
    GenericService,
    LoadingService,
    LocalStorageEncryptService,
    ValidationService,
    HeaderColor
  ]
})
export class ProvidersModule {}
