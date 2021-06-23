import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meritoire-user',
  templateUrl: './meritoire-user.component.html',
  styleUrls: ['./meritoire-user.component.scss']
})
export class MeritoireUserComponent implements OnInit {

  meritoires = [
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
    },
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
    },
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
    },
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
    },
    {
      nomComplet: 'Amy',
      telephone:"77 777 77 77",
      date:'15/12/2020',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
