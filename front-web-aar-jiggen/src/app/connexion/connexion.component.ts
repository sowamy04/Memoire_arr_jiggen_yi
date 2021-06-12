import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  loginForm : FormGroup | any
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

  onLogin(){
    
  }

}
