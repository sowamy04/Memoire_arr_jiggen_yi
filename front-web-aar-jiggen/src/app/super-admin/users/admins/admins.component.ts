import { Table } from 'primeng/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  admins = [
    {
      id : 1,
      prenom: 'Admin',
      nom: 'Admin1',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      id : 2,
      prenom: 'Admin',
      nom: 'Admin2',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      id : 3,
      prenom: 'Admin',
      nom: 'Admin3',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      id : 4,
      prenom: 'Admin',
      nom: 'Admin4',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      id : 5,
      prenom: 'Admin',
      nom: 'Admin5',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      id : 6,
      prenom: 'Admin',
      nom: 'Admin6',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      id : 7,
      prenom: 'Admin',
      nom: 'Admin7',
      email : 'test@gmail.com',
      telephone:'777777777',
      genre:'F',
      adresse:'KM'
    },
    {
      id : 8,
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
  selectedUsers : any

  @ViewChild('dt') dt: Table | any;
  constructor() { }

  ngOnInit(): void {
  }

  applyFilterGlobal($event: any, stringVal : any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
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
