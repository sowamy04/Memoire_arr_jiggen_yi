import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.component.html',
  styleUrls: ['./alertes.component.scss']
})
export class AlertesComponent implements OnInit {

  alertes = [
    {
      id:'1',
      user:'adja',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      user:'adja',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      user:'adja',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      user:'adja',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      user:'adja',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      user:'adja',
      meritoire:'anta',
      date:'23/03/2020'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
