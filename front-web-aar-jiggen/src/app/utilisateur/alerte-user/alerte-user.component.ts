import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GenerationTokenService } from './../../services/generation-token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerte-user',
  templateUrl: './alerte-user.component.html',
  styleUrls: ['./alerte-user.component.scss']
})
export class AlerteUserComponent implements OnInit {

  alertes = [
    {
      id:'1',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      meritoire:'anta',
      date:'23/03/2020'
    },
    {
      id:'1',
      meritoire:'anta',
      date:'23/03/2020'
    }
  ]
  constructor( private auth: GenerationTokenService, private route : Router , private location : Location ) { }

  ngOnInit(): void {
  }
}
