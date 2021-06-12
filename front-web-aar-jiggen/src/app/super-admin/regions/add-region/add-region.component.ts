import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  regionForm : FormGroup | any

  constructor( private location : Location) { }

  ngOnInit(): void {
    this.regionForm = new FormGroup({
      nomRegion : new FormControl('', Validators.required)
    });
  }

  ajouterRegion(){

  }

  retour(){
    this.location.back()
  }

}
