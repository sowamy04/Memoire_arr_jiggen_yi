import { EditOrgComponent } from './super-admin/regions/departements/villes/organes/edit-org/edit-org.component';
import { AddOrgComponent } from './super-admin/regions/departements/villes/organes/add-org/add-org.component';
import { EditQuartierComponent } from './super-admin/regions/departements/villes/quartiers/edit-quartier/edit-quartier.component';
import { AddQuartierComponent } from './super-admin/regions/departements/villes/quartiers/add-quartier/add-quartier.component';
import { EditVilleComponent } from './super-admin/regions/departements/villes/edit-ville/edit-ville.component';
import { AddVilleComponent } from './super-admin/regions/departements/villes/add-ville/add-ville.component';
import { EditDeptComponent } from './super-admin/regions/departements/edit-dept/edit-dept.component';
import { AddDeptComponent } from './super-admin/regions/departements/add-dept/add-dept.component';
import { EditRegionComponent } from './super-admin/regions/edit-region/edit-region.component';
import { AddRegionComponent } from './super-admin/regions/add-region/add-region.component';
import { AdminsComponent } from './super-admin/users/admins/admins.component';
import { InfoPersonnelComponent } from './super-admin/users/info-personnel/info-personnel.component';
import { AlertesComponent } from './super-admin/parametres/alertes/alertes.component';
import { StatisqtiquesComponent } from './super-admin/regions/departements/villes/quartiers/statisqtiques/statisqtiques.component';
import { AvisComponent } from './super-admin/parametres/avis/avis.component';
import { ItinerairesComponent } from './super-admin/parametres/itineraires/itineraires.component';
import { MeritoiresComponent } from './super-admin/parametres/meritoires/meritoires.component';
import { ProfilsComponent } from './super-admin/profils/profils.component';
import { UsersComponent } from './super-admin/users/users.component';
import { OrganesComponent } from './super-admin/regions/departements/villes/organes/organes.component';
import { QuartiersComponent } from './super-admin/regions/departements/villes/quartiers/quartiers.component';
import { VillesComponent } from './super-admin/regions/departements/villes/villes.component';
import { DepartementsComponent } from './super-admin/regions/departements/departements.component';
import { RegionsComponent } from './super-admin/regions/regions.component';
import { AddAdminComponent } from './super-admin/users/add-admin/add-admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'connexion', pathMatch:'full'},
  { path:'connexion', component:ConnexionComponent},
  { path:'inscription', component:InscriptionComponent},
  { path:'super-admin', component:SuperAdminComponent, children:[
    { path:'add-admin', component:AddAdminComponent },
    { path:'regions', component: RegionsComponent, children : [
        { path: 'add-region', component: AddRegionComponent},
        { path: 'update-region', component: EditRegionComponent }
      ]
    },
    { path:'depts', component: DepartementsComponent, children : [
        { path: 'add-dept', component: AddDeptComponent},
        { path: 'update-dept', component: EditDeptComponent }
      ]
    },
    { path:'villes', component: VillesComponent, children : [
        { path: 'add-ville', component: AddVilleComponent},
        { path: 'update-ville', component: EditVilleComponent }
      ]
    },
    { path:'quartiers', component:QuartiersComponent, children : [
        { path: 'add-quartier', component: AddQuartierComponent},
        { path: 'update-quartier', component: EditQuartierComponent }
      ]
    },
    { path:'organes', component: OrganesComponent, children : [
        { path: 'add-organe', component: AddOrgComponent},
        { path: 'update-organe', component: EditOrgComponent }
      ]
    },
    { path:'users', component: UsersComponent },
    { path:'profils', component: ProfilsComponent },
    { path:'meritoires', component: MeritoiresComponent },
    { path:'itineraires', component: ItinerairesComponent },
    { path:'avis', component: AvisComponent },
    { path:'stats', component: StatisqtiquesComponent },
    { path:'alertes', component: AlertesComponent },
    { path:'infos', component:InfoPersonnelComponent },
    { path: 'admins', component: AdminsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
