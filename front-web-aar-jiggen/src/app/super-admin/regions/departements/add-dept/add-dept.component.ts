import { RegionService } from './../../../services/region.service';
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
  regions: any[] = []
  filteredOptions: Observable<string[]> | any;

  constructor( private location : Location, private regionService : RegionService) {
    this.getRegion()
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

  getRegion(){
    this.regionService.listeRegions().subscribe(
      (resultat : any)=> {
        console.log(resultat)
        this.regions = resultat
      },
      error => console.log ( 'Erreur lors du chargement', error )
    )
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
