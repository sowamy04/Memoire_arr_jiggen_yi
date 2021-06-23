import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = environment.apiUrl
  constructor( private http : HttpClient ) { }

  listeAdmin(){
    return this.http.get(this.url+'super_admin/admins')
  }

  supprimerAdmin(id: any){
    return this.http.delete(this.url+'super_admin/admins/'+id)
  }
}
