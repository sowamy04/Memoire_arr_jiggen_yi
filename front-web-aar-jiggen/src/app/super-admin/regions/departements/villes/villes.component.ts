import { VilleService } from './../../../services/ville.service';
import { Table } from 'primeng/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss']
})
export class VillesComponent implements OnInit {

 villes : any = [

];

departements : any

productDialog : any = false;

product: any;

selectedProducts: any;

any: any;

submitted: boolean = false;

statuses: any;

  @ViewChild('dt') dt: Table | any;
  constructor( private villeService : VilleService ) {}

  ngOnInit() {
    this.getVille()
  }

  getVille(){
    this.villeService.listeVilles().subscribe(
      (resultat : any) => {
        console.log(resultat)
        this.villes = resultat
      },
      error => console.log ('Erreur lors du chargement', error)
    )
  }

  applyFilterGlobal($event: any, stringVal : any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteVille(ville : any){

  }

  deleteSelectedVilles() {

  }

}

