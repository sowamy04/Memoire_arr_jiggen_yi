import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.scss']
})
export class EditDeptComponent implements OnInit {

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

  updateDept(){

  }

  retour(){
    this.location.back()
  }

}
