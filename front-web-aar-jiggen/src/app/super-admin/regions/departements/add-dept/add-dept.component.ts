import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.scss']
})
export class AddDeptComponent implements OnInit {

  deptForm : FormGroup | any
  region = new FormControl();
  regions: any[] = [
    {nomRegion: 'Mary'},
    {nomRegion: 'Shelley'},
    {nomRegion: 'Igor'}
  ];
  filteredOptions: Observable<string[]> | any;

  constructor( private location : Location) {

  }

  ngOnInit(): void {
    this.filteredOptions = this.region.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.nomRegion),
        map(name => name ? this._filter(name) : this.regions.slice())
      );
      this.deptForm = new FormGroup({
        nomDept : new FormControl('', Validators.required),
        region : new FormControl('', Validators.required)
      });
  }

  displayFn(region: any): string {
    return region && region.nomRegion ? region.nomRegion : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.regions.filter(option => option.nomRegion.toLowerCase().indexOf(filterValue) === 0);
  }

  ajouterDept(){

  }

  retour(){
    this.location.back()
  }

}
