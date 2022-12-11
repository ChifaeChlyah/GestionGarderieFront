import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../utile/environement";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient,private router:Router) { }
  public loginAdmin(email:String,password:String)
  {
    let user={"email":email,"password":password};
    return this.http.post(environment.apiUrl+"administrateur/connection",user,{observe:"response"});
  }
  public loginParent(email:String,password:String)
  {
    let user={"email":email,"password":password};
    return this.http.post(environment.apiUrl+"parent/connection",user,{observe:"response"});
  }
}
