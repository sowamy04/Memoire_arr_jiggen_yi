import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-villes',
  templateUrl: './stats-villes.component.html',
  styleUrls: ['./stats-villes.component.scss']
})
export class StatsVillesComponent implements OnInit {

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

