import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  url = environment.apiUrl
  constructor( private http:HttpClient ) { }

  listeDept(){
    return this.http.get(this.url+'regions/departements')
  }

  afficherDept(id : any){
    this.http.get(this.url+'regions/departements/'+id)
  }

  modifierDept(id : any, dept:any){
    this.http.put(this.url+'regions/departements/'+id, dept)
  }

  delete(id: any){
    this.http.delete(this.url+'regions/departements/'+id)
  }
}
