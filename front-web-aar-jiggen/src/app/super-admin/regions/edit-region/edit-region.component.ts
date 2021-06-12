import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.scss']
})
export class EditRegionComponent implements OnInit {

  regionForm : FormGroup | any

  constructor( private location : Location) { }

  ngOnInit(): void {
    this.regionForm = new FormGroup({
      nomRegion : new FormControl('', Validators.required)
    });
  }

  updateRegion(){

  }

  retour(){
    this.location.back()
  }

}
