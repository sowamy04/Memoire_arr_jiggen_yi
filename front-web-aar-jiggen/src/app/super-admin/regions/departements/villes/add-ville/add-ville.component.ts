import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.scss']
})
export class AddVilleComponent implements OnInit {

  villeForm : FormGroup | any
  dept = new FormControl();
  depts: any[] = [
    {nomDept: 'Guédiawaye'},
    {nomDept: 'pikine'},
    {nomDept: 'rufisque'}
  ];
  filteredOptions: Observable<string[]> | any;

  constructor( private location : Location) {

  }

  ngOnInit(): void {
    this.filteredOptions = this.dept.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.nomDept),
        map(name => name ? this._filter(name) : this.depts.slice())
      );
      this.villeForm = new FormGroup({
        nomVille : new FormControl('', Validators.required),
        dept : new FormControl('', Validators.required)
      });
  }

  displayFn(dept: any): string {
    return dept && dept.nomDept ? dept.nomDept : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.depts.filter(option => option.nomDept.toLowerCase().indexOf(filterValue) === 0);
  }

  ajouterVille(){

  }

  retour(){
    this.location.back()
  }

}
