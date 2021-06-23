import { ItineraireService } from './../../services/itineraire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itineraires',
  templateUrl: './itineraires.component.html',
  styleUrls: ['./itineraires.component.scss']
})
export class ItinerairesComponent implements OnInit {

  itineraires : any
  constructor( private itineraireService : ItineraireService ) { }

  ngOnInit(): void {
    this.showItineraire()
  }

  showItineraire(){
    this.itineraireService.listeItineraires().subscribe(
      (resultat : any) => {
        console.log (resultat)
        this.itineraires = resultat
      },
      error => console.log ('Erreur lors du chargement', error)
    )
  }

}
