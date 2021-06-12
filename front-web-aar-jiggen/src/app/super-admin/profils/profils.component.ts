import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {

  profils: any = [
    { id:"1", libelle:"SUPER ADMIN", users:[
      {id:"1", prenom:"amy", nom:"sow", email:"email@gmail.com", telephone:"776578909"},
      {id:"2", prenom:"anta", nom:"ndiaye", email:"email@gmail.com", telephone:"776578909"},
      {id:"3", prenom:"awa", nom:"dramé", email:"email@gmail.com", telephone:"776578909"}
    ] },
    { id:"2", libelle: "ADMIN" },
    { id:"3", libelle: "SIMPLE_USER" }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
