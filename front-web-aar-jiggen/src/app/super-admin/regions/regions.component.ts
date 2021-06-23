import Swal from 'sweetalert2';
import { RegionService } from './../services/region.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  styles :[`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
  `]
})
export class RegionsComponent implements OnInit {

  regions: any

  productDialog : any = false;

  product: any;

  selectedProducts: any;

  any: any;

  submitted: boolean = false;

  statuses: any;

  @ViewChild('dt') dt: Table | any;
  constructor( private regionService : RegionService ) { }

  ngOnInit() {
    this.showRegions()
  }

  showRegions(){
    this.regionService.listeRegions().subscribe(
      (resultat : any)=> {
        console.log(resultat)
        this.regions = resultat
      },
      error => console.log('Erreur lors du chargement!')
    )
  }

  applyFilterGlobal($event: any, stringVal : any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteSelectedRegions() {

  }

  supprimer(region:any){
    console.log(region)
    Swal.fire({
      title: 'veut-tu vraiment supprimer cette région?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.regionService.supprimerRegion(region.id).subscribe(
          (result : any)=>{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Région supprimée avec succès',
              showConfirmButton: false,
              timer: 1500
            })
            console.log(result)
          },
          error=>console.log(error)
        )
      } else if (result.isDenied) {
        Swal.fire('Suppression annulée', '', 'info')
      }
    })
  }
}

