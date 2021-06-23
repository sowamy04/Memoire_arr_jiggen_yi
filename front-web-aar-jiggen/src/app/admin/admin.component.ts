import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GenerationTokenService } from './../services/generation-token.service';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private auth : GenerationTokenService, private location : Location, private route : Router ) { }

  ngOnInit(): void {
  }

  transform(image: string){
    if(image){
      return "data:image/jpg;base64," + image
    }
    return "../../../assets/images/identification.png";
  }

  deconnexion(){
    Swal.fire({
      title: 'Voulez-vous vraiment quitter?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const val = this.auth.logout()
        this.route.navigateByUrl('connexion')
      } else if (result.isDenied) {
        this.location.back()
      }
    })
  }
}
