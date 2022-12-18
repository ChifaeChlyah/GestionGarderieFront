import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { environment } from '../utile/environement';
import {Observable} from "rxjs";
import {ParentModel} from "../models/Parent.model";
import {EnfantModel} from "../models/Enfant.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http : HttpClient ,

  ) { }

  post(serviceName: string, data: any) {

    console.log("Sending post request ...")

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');


    const url = environment.apiUrl + serviceName;

    return this.http.post(url,data);
  }



  authGet(serviceName: string, queryParams ?: HttpParams ) {

    console.log("Sending auth get request ...");

    // const token: string = this.storageService.loadToken();
    const url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');


    const options = {
      headers,
      withCredintials: false,
      observe: "response" as 'body',
      params: queryParams
    };

    return this.http.get(url, options);
  }


  authDelete(serviceName: string, queryParams ? : HttpParams ) {

    console.log("Sending auth delete request ..")


    // const token: string = this.storageService.loadToken();
    const url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
      // .set('Authorization', `Bearer ${token}`);

    const options = {
      headers,
      withCredintials: false,
      observe: "response" as 'body',
      params: queryParams
    };

    return this.http.delete(url, options);
  }

  getParent(id: string | null):Observable<HttpResponse<ParentModel>>{
    return this.http.get<ParentModel>(environment.apiUrl+"parent/"+id,{observe:"response"});
  }

  getEnfantByParentId(id: string | null):Observable<HttpResponse<EnfantModel>>{
    return this.http.get<EnfantModel>(environment.apiUrl+"parent/enfantByParentId/"+id,{observe:"response"});
  }


}
