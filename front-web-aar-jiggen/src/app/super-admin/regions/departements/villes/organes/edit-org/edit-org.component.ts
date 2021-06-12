import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-org',
  templateUrl: './edit-org.component.html',
  styleUrls: ['./edit-org.component.scss']
})
export class EditOrgComponent implements OnInit {

  orgForm : FormGroup | any
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
      this.orgForm = new FormGroup({
        nomOrgane : new FormControl('', Validators.required),
        ville : new FormControl('', Validators.required),
        telephone : new FormControl('', Validators.required),
        email : new FormControl('', Validators.required)
      });
  }

  displayFn(ville: any): string {
    return ville && ville.nomVille ? ville.nomVille : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.villes.filter(option => option.nomVille.toLowerCase().indexOf(filterValue) === 0);
  }

  modifierOrgane(){

  }

  retour(){
    this.location.back()
  }

}

