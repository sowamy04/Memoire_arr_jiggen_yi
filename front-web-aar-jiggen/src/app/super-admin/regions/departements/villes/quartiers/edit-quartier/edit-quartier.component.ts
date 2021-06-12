import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-quartier',
  templateUrl: './edit-quartier.component.html',
  styleUrls: ['./edit-quartier.component.scss']
})
export class EditQuartierComponent implements OnInit {

  quartierForm : FormGroup | any
  ville = new FormControl();
  villes: any[] = [
    {nomVille: 'Guédiawaye'},
    {nomVille: 'pikine'},
    {nomVille: 'rufisque'}
  ];
  filteredOptions: Observable<string[]> | any;

  constructor( private location : Location) {

  }

  ngOnInit(): void {
    this.filteredOptions = this.ville.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.nomVille),
        map(name => name ? this._filter(name) : this.villes.slice())
      );
      this.quartierForm = new FormGroup({
        nomQuartier : new FormControl('', Validators.required),
        ville : new FormControl('', Validators.required)
      });
  }

  displayFn(dept: any): string {
    return dept && dept.nomVille ? dept.nomVille : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.villes.filter(option => option.nomVille.toLowerCase().indexOf(filterValue) === 0);
  }

  modifierQuartier(){

  }

  retour(){
    this.location.back()
  }

}
