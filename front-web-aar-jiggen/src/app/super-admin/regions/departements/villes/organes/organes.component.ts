import { OrganesService } from './../../../../services/organes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organes',
  templateUrl: './organes.component.html',
  styleUrls: ['./organes.component.scss']
})
export class OrganesComponent implements OnInit {

  organes : any
  constructor( private organeService : OrganesService ) { }

  ngOnInit(): void {
    this.showOrganes()
  }

  showOrganes(){
    this.organeService.listeOrganes().subscribe(
      (resultat : any) => {
        console.log (resultat)
        this.organes = resultat
      },
      error => console.log ('Erreur lors du chargement', error)
    )
  }

}
