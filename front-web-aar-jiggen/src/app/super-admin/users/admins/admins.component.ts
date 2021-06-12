import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  admins = [
    {
      prenom: 'Admin',
      nom: 'Admin1',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      prenom: 'Admin',
      nom: 'Admin2',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      prenom: 'Admin',
      nom: 'Admin3',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      prenom: 'Admin',
      nom: 'Admin4',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      prenom: 'Admin',
      nom: 'Admin5',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },{
      prenom: 'Admin',
      nom: 'Admin6',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },{
      prenom: 'Admin',
      nom: 'Admin7',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },{
      prenom: 'Admin',
      nom: 'Admin8',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    }
  ];

  first = 0;

  rows = 5;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.admins ? this.first === (this.admins.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.admins ? this.first === 0 : true;
}

}
