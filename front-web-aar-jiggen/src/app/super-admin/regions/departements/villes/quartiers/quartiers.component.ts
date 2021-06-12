import { Table } from 'primeng/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-quartiers',
  templateUrl: './quartiers.component.html',
  styleUrls: ['./quartiers.component.scss']
})
export class QuartiersComponent implements OnInit {

  quartiers : any = [
      { id: 1, nomQuartier:"dakar", nomVille: "Dakar"},
      { id : 2, nomQuartier : "sacré coeur", nomVille: "Mermoz Sacré coeur"},
      {id:"2", nomQuartier:"Gadaye", nomVille: "Guediawaye"},
      {id:"3", nomQuartier:"Beau maraicher", nomVille: "Pikine"},
      {id:"4", nomQuartier:"Arafat", nomVille: "Rufisque"}
];

villes : any

productDialog : any = false;

product: any;

selectedProducts: any;

any: any;

submitted: boolean = false;

statuses: any;

@ViewChild('dt') dt: Table | any;
constructor() {
  this.villes= [
      {id:"1", nomVille:"Dakar"},
      {id:"2", nomVille:"Guediawaye"},
      {id:"3", nomVille:"Pikine"},
      {id:"4", nomVille:"Rufisque"}
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

