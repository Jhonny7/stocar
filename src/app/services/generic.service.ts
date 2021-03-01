import { LocalStorageEncryptService } from './local-storage-encrypt.service';
import { HttpHeaders } from '@angular/common/http';
import { AlertaService } from './alerta.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/timeout';
import { catchError, timeout } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable, TimeoutError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Events } from 'ionic-angular';

export const TIME_OUT = 1000 * 60 * 1; //ultimo número define en minutos
/**Clase provider que es básicamente un servicio generico para las peticiones a servicios */
@Injectable()
export class GenericService {

    public user: any = null;
    constructor(
        private readonly http: HttpClient,
        private localStorageEncryptService: LocalStorageEncryptService,
        private events: Events) {

    }

    /**Método que hace peticiones tipo GET */
    sendGetRequest(webservice_URL: string, clase: any = null) {
        let observable: any = this.http.get(webservice_URL);

        if (clase) {
            return observable.pipe(map((data: any) => {
                let arr: any = data;

                let obj: any = null;
                if (!Array.isArray(arr)) {
                    obj = clase.fromJson(arr);
                } else {
                    obj = arr.map(item => clase.fromJson(item));
                }
                return obj;
            }))
        } else {
            return observable;
        }
    }

    /**Método que hace peticiones tipo GET  con parámetros*/
    sendGetRequestParams(webservice_URL: string, params: any) {
        //return this.http.get(webservice_URL, params).timeout(TIME_OUT);
        return this.http.get(webservice_URL, params)
    }

    /**Método que hace peticiones tipo GET  con parámetros*/
    sendGetParams(webservice_URL: string, params: any) {
        //return this.http.get(webservice_URL, params).timeout(TIME_OUT);
        let options: any = {};
        options.params = params;
        return this.http.get(webservice_URL, options);
    }

    /**Método que hace peticiones tipo POST  con parámetros específicos*/
    sendPostRequestParams(webservice_URL: string, params: any, httpOptions: any) {
        //return this.http.post(webservice_URL, params, httpOptions).timeout(TIME_OUT);
        return this.http.post(webservice_URL, params, httpOptions);
    }

    /**Método que hace peticiones tipo POST */
    sendPostRequest(webservice_URL: string, request: {}) {
        //return this.http.post(webservice_URL, request).timeout(TIME_OUT);
        return this.http.post(webservice_URL, request);
    }

    /**Método que hace peticiones tipo PUT */
    sendPutRequest(webservice_URL: string, request: {} = {}) {
        //return this.http.post(webservice_URL, request).timeout(TIME_OUT);
        return this.http.put(webservice_URL, request);
    }

    /**Método que hace peticiones tipo DELETE */
    sendDeleteRequest(webservice_URL: string) {
        //return this.http.delete(webservice_URL).timeout(TIME_OUT);
        return this.http.delete(webservice_URL);
    }

    /**Método que hace peticiones tipo DELETE */
    sendDelete(webservice_URL: string) {
        //return this.http.delete(webservice_URL).timeout(TIME_OUT);
        return this.http.delete(webservice_URL);
    }

    getUser(){
        return this.localStorageEncryptService.getFromLocalStorage("userSession");
    }

    //For themes
    getColor(){
        let color:any = this.localStorageEncryptService.getFromLocalStorage("theme");
        let retornar:any = color == '#3b64c0' ? 'primary' : color == '#be3b3b' ? 'primary2' : color == '#3bb8be' ? 'primary3' : color == '#292929' ? 'primary5' : color == '#F07C1B' ? 'primary6' : 'primary4';
        
        return retornar;
    }

    getColorHex(){
        let color:any = this.localStorageEncryptService.getFromLocalStorage("theme");
        
        return color;
    }

    getColorClass(){
        let color:any = this.localStorageEncryptService.getFromLocalStorage("theme");
        let retornar:any = color == '#3b64c0' ? 'alerta-loteria' : color == '#be3b3b' ? 'alerta-loteria2' : color == '#3bb8be' ? 'alerta-loteria3' : color == '#292929' ? 'alerta-loteria5' : color == '#F07C1B' ? 'alerta-loteria6' : 'alerta-loteria4';
      
        return retornar;
    }

    getColorClassTWO(){
        let color:any = this.localStorageEncryptService.getFromLocalStorage("theme");
        let retornar:any = color == '#3b64c0' ? 'alerta-two-button' : color == '#be3b3b' ? 'alerta-two-button2' : color == '#3bb8be' ? 'alerta-two-button3' : color == '#292929' ? 'alerta-two-button5' : color == '#F07C1B' ? 'alerta-two-button6' : 'alerta-two-button4';
        
        return retornar;
    }
}