import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganesService {

  url = environment.apiUrl
  constructor( private http:HttpClient ) { }

  listeOrganes(){
    return this.http.get(this.url+'organes')
  }

  afficherOrgane(id : any){
    this.http.get(this.url+'villes/organes/'+id)
  }

  modifierOrgane(id : any, dept:any){
    this.http.put(this.url+'villes/organes/'+id, dept)
  }

  deleteOrgane(id: any){
    this.http.delete(this.url+'villes/organes/'+id)
  }
}
