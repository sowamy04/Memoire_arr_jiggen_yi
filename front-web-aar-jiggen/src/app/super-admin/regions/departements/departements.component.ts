import { DeptService } from './../../services/dept.service';
import { RegionService } from './../../services/region.service';
import { Table } from 'primeng/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss'],
  styles :[`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
  `]
})
export class DepartementsComponent implements OnInit {

  departements: any

  regions : any

  productDialog : any = false;

  product: any;

  selectedProducts: any;

  any: any;

  submitted: boolean = false;

  statuses: any;

  @ViewChild('dt') dt: Table | any;
  constructor( private regionService : RegionService, private deptService : DeptService ) {
  }

  ngOnInit() {
    this.showDepts()
  }

  showDepts(){
    this.deptService.listeDept().subscribe(
      (resultat : any)=>{
        console.log (resultat)
        this.departements = resultat
      },
      error => console.log('Erreur lors du chargement', error)
    )
  }

  applyFilterGlobal($event: any, stringVal : any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  openNew() {
      this.submitted = false;
      this.productDialog = true;
  }

  deleteSelectedProducts() {

  }

  editProduct(id: any) {
      this.productDialog = true;
  }

  deleteProduct(id: any) {

  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {

  }
}

