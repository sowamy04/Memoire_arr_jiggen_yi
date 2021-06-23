import { QuartierService } from './../../../../services/quartier.service';
import { Table } from 'primeng/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-quartiers',
  templateUrl: './quartiers.component.html',
  styleUrls: ['./quartiers.component.scss']
})
export class QuartiersComponent implements OnInit {

  quartiers : any = [];

  villes : any

  productDialog : any = false;

  product: any;

  selectedProducts: any;

  any: any;

  submitted: boolean = false;

  statuses: any;

  @ViewChild('dt') dt: Table | any;
  constructor( private quartierService : QuartierService ) {}

  ngOnInit() {
    this.getQuartiers()
  }

  getQuartiers(){
    this.quartierService.listequartiers().subscribe(
      (resultat : any) => {
        console.log (resultat)
        this.quartiers = resultat
      },
      error => console.log ('Erreur lors du chargement', error)
    )
  }

  applyFilterGlobal($event: any, stringVal : any) {
  this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteSelectedQuartiers() {

  }

  deleteQuartier(id: any) {

  }

}

