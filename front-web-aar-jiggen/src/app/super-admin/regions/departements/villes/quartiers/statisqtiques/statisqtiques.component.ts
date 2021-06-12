import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statisqtiques',
  templateUrl: './statisqtiques.component.html',
  styleUrls: ['./statisqtiques.component.scss']
})
export class StatisqtiquesComponent implements OnInit {

  statistiques = [
    {
      id : 1,
      quartier : "Keur massar",
      eclairagePublique : 5,
      vol : 3,
      viol : 1,
      agression : 2,
      transport : 3
    },
    {
      id : 1,
      quartier : "Keur massar",
      eclairagePublique : 5,
      vol : 3,
      viol : 1,
      agression : 2,
      transport : 3
    },
    {
      id : 1,
      quartier : "Keur massar",
      eclairagePublique : 5,
      vol : 3,
      viol : 1,
      agression : 2,
      transport : 3
    },
    {
      id : 1,
      quartier : "Keur massar",
      eclairagePublique : 5,
      vol : 3,
      viol : 1,
      agression : 2,
      transport : 3
    },
    {
      id : 1,
      quartier : "Keur massar",
      eclairagePublique : 5,
      vol : 3,
      viol : 1,
      agression : 2,
      transport : 3
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
