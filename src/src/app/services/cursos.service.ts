import { Injectable } from '@angular/core';
import { global } from "../api";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ICurso } from "../models/curso";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public url : string;
  public identity:any;
  public token:string;
  //public token:Observable<string>;

  constructor(private _http:HttpClient) { 
    this.url = global.api;
    
  }
  
  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity != 'undefined'){
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }

  getToken(){
    let _token = localStorage.getItem('token');
    if(_token != "undefined"){
      this.token = _token;
    }else{
      this.token = null;
    }
    return this.token;
    //return this._http.get(this.url+'/Colegio/ObtenerToken',{responseType:'text'});
  }
  
  getCursos():Observable<ICurso[]>{
    let _headers = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization', this.getToken());
    return this._http.get<ICurso[]>(this.url+'/Colegio​/ObtenerCursos',{headers:_headers})
  }

  
}
