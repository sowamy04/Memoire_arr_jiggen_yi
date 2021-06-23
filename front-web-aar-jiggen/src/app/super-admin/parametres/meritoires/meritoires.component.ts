import { MeritoireService } from './../../services/meritoire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meritoires',
  templateUrl: './meritoires.component.html',
  styleUrls: ['./meritoires.component.scss']
})
export class MeritoiresComponent implements OnInit {

  meritoires : any
  constructor( private meritoireService : MeritoireService ) { }

  ngOnInit(): void {
    this.showItineraire()
  }

  showItineraire(){
    this.meritoireService.listePersonne_confiances().subscribe(
      (resultat : any) => {
        console.log (resultat)
        this.meritoires = resultat
      },
      error => console.log ('Erreur lors du chargement', error)
    )
  }

  transform(image: string){
    if(image){
      return "data:image/jpg;base64," + image
    }
    return "../../../assets/images/identification.png";
  }

}
