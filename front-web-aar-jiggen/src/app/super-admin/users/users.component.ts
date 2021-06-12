import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      prenom: 'Amy',
      nom: 'Sow1',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      prenom: 'Amy',
      nom: 'Sow2',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      prenom: 'Amy',
      nom: 'Sow3',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      prenom: 'Amy',
      nom: 'Sow4',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      prenom: 'Amy',
      nom: 'Sow5',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },{
      prenom: 'Amy',
      nom: 'Sow6',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },{
      prenom: 'Amy',
      nom: 'Sow7',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },{
      prenom: 'Amy',
      nom: 'Sow8',
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
    return this.users ? this.first === (this.users.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
}

}
