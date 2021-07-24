import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl
  constructor( private http : HttpClient ) { }

  listerUtilisateurs(){
    return this.http.get(this.url+'simple_users')
  }

  supprimerUser(id : any){
    return this.http.delete(this.url+'simple_users/'+id)
  }

  modifierUtilisateur(id : any, user :any){
    return this.http.post(this.url+'simple_users/'+id+'?_method=PUT', user)
  }

  ajouterUtilisateur(user : any){
    return this.http.post(this.url+'simple_users', user)
  }

  afficherUser(id : any){
    return this.http.get(this.url+'simple_users/'+id)
  }

  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////

  afficherSuperAdmin(id : any){
    return this.http.get(this.url+'super_admins/'+id)
  }

  ////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////

  afficherAdmin(id : any){
    return this.http.get(this.url+'super_admin/admins/'+id)
  }


  /////////////////////////////////////////////////////////////////////
  ///////////////////////////////// Alertes ///////////////////////////
  /////////////////////////////////////////////////////////////////////

  showAlertes (){
    return this.http.get(this.url+'alertes')
  }
}
