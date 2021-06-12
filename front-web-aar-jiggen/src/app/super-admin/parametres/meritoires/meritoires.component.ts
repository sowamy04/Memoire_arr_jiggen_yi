import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meritoires',
  templateUrl: './meritoires.component.html',
  styleUrls: ['./meritoires.component.scss']
})
export class MeritoiresComponent implements OnInit {

  meritoires = [
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
      user:'Adja'
    },
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
      user:'Adja'
    },
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
      user:'Adja'
    },
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
      user:'Adja'
    },
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
      user:'Adja'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
