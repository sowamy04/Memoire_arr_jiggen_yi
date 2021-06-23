import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-avis',
  templateUrl: './add-avis.component.html',
  styleUrls: ['./add-avis.component.scss']
})
export class AddAvisComponent implements OnInit {

  avisForm : FormGroup | any
  quartier = new FormControl();
  villes: any[] = [
    {nomVille: 'Guédiawaye'},
    {nomVille: 'pikine'},
    {nomVille: 'rufisque'}
  ];
  filteredOptions: Observable<string[]> | any;

  constructor( private location : Location) {

  }

  ngOnInit(): void {
    this.filteredOptions = this.quartier.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.nomVille),
        map(name => name ? this._filter(name) : this.villes.slice())
      );
      this.avisForm = new FormGroup({
        vol : new FormControl('', Validators.required),
        quartier : new FormControl('', Validators.required),
        viol : new FormControl('', Validators.required),
        agression : new FormControl('', Validators.required),
        transport : new FormControl('', Validators.required),
        qualite : new FormControl('', Validators.required),
        eclairage : new FormControl('', Validators.required),
        description : new FormControl('', Validators.required)
      });
  }

  displayFn(dept: any): string {
    return dept && dept.nomVille ? dept.nomVille : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.villes.filter(option => option.nomVille.toLowerCase().indexOf(filterValue) === 0);
  }

  ajouterAvis(){

  }

  retour(){
    this.location.back()
  }

}
