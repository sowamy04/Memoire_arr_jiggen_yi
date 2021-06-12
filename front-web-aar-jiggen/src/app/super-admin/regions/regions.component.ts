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

  regions: any = [
    { id:"1", nomRegion:"Dakar", departements:[
      {id:"1", nomDept:"Dakar"},
      {id:"2", nomDept:"Guediawaye"},
      {id:"3", nomDept:"Pikine"},
      {id:"4", nomDept:"Rufisque"}
    ] },
    { id:"2", nomRegion: "Thies" },
    { id:"3", nomRegion: "Diourbel" }
  ];

  productDialog : any = false;

  product: any;

  selectedProducts: any;

  any: any;

  submitted: boolean = false;

  statuses: any;

  @ViewChild('dt') dt: Table | any;
  constructor() { }

  ngOnInit() {

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

