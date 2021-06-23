import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  url = environment.apiUrl
  constructor( private http:HttpClient ) { }

  listeAvis(){
    return this.http.get(this.url+'avis')
  }

  afficherAvis(id : any){
    this.http.get(this.url+'simple_users/avis/'+id)
  }

  modifierAvis(id : any, avis:any){
    this.http.put(this.url+'simple_users/avis/'+id, avis)
  }

  deleteAvis(id: any){
    this.http.delete(this.url+'simple_users/avis/'+id)
  }
}
