import { Table } from 'primeng/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss']
})
export class VillesComponent implements OnInit {

 villes : any = [
    {id:"1", nomVille:"Fass", nomDept: "Dakar", quartiers :[
      { id: 1, nomQuartier:"dakar"},
      { id : 2, nomQuartier : "sacré coeur"}
    ]},
    {id:"2", nomVille:"Gadaye", nomDept: "Guediawaye"},
    {id:"3", nomVille:"Beau maraicher", nomDept: "Pikine"},
    {id:"4", nomVille:"Arafat", nomDept: "Rufisque",}
];

departements : any

productDialog : any = false;

product: any;

selectedProducts: any;

any: any;

submitted: boolean = false;

statuses: any;

@ViewChild('dt') dt: Table | any;
constructor() {
  this.departements= [
      {id:"1", nomDept:"Dakar"},
      {id:"2", nomDept:"Guediawaye"},
      {id:"3", nomDept:"Pikine"},
      {id:"4", nomDept:"Rufisque"}
  ]
}

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

