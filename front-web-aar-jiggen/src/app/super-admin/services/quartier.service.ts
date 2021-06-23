import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  url = environment.apiUrl
  constructor( private http:HttpClient ) { }

  listequartiers(){
    return this.http.get(this.url+'quartiers')
  }

  afficherquartier(id : any){
    this.http.get(this.url+'villes/quartiers/'+id)
  }

  modifierquartier(id : any, dept:any){
    this.http.put(this.url+'villes/quartiers/'+id, dept)
  }

  deletequartier(id: any){
    this.http.delete(this.url+'villes/quartiers/'+id)
  }
}
