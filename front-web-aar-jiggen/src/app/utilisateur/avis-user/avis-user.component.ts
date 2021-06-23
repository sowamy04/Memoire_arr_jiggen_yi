import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avis-user',
  templateUrl: './avis-user.component.html',
  styleUrls: ['./avis-user.component.scss']
})
export class AvisUserComponent implements OnInit {

  cols: any[] = [];
  _selectedColumns: any[] = [];

  avis = [
    {
      id:"1",
      user:'Yacine',
      quartier:'rufisque',
      eclairage: 3,
      vol:4,
      viol:1,
      agression:2,
      transport :"3",
      description :"la description",
      qualiteRoute : "defectueux"
     },
     {
      id:"2",
      user:'Yacine',
      quartier:'rufisque',
      eclairage: 3,
      vol:4,
      viol:1,
      agression:2,
      transport :"3",
      description :"la description",
      qualiteRoute : "defectueux"
     },
     {
      id:"3",
      user:'Yacine',
      quartier:'rufisque',
      eclairage: 3,
      vol:4,
      viol:1,
      agression:2,
      transport :"3",
      description :"la description",
      qualiteRoute : "defectueux"
     },
     {
      id:"4",
      user:'Yacine',
      quartier:'rufisque',
      eclairage: 3,
      vol:4,
      viol:1,
      agression:2,
      transport :"3",
      description :"la description",
      qualiteRoute : "defectueux"
     },
     {
      id:"5",
      user:'Yacine',
      quartier:'rufisque',
      eclairage: 3,
      vol:4,
      viol:1,
      agression:2,
      transport :"3",
      description :"la description",
      qualiteRoute : "defectueux"
     },
  ]
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'user', header: 'Utilisateur' },
      { field: 'quartier', header: 'Quartier' },
      { field: 'vol', header: 'Vol' },
      { field: 'viol', header: 'Viol' },
      { field: 'agression', header: 'Agression' },
      { field: 'transport', header: 'Transport' },
      { field: 'eclairage', header: 'Eclairage publique' },
      { field: 'description', header: 'Description' },
      { field: 'qualiteRoute', header: 'Qualité route' }
  ];

  this._selectedColumns = this.cols;

  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
}

set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
}

}
