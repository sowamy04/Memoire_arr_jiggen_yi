import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { RegionsComponent } from './super-admin/regions/regions.component';
import { DepartementsComponent } from './super-admin/regions/departements/departements.component';
import { VillesComponent } from './super-admin/regions/departements/villes/villes.component';
import { QuartiersComponent } from './super-admin/regions/departements/villes/quartiers/quartiers.component';
import { OrganesComponent } from './super-admin/regions/departements/villes/organes/organes.component';
import { UsersComponent } from './super-admin/users/users.component';
import { ProfilsComponent } from './super-admin/profils/profils.component';
import { StatisqtiquesComponent } from './super-admin/regions/departements/villes/quartiers/statisqtiques/statisqtiques.component';
import { AlertesComponent } from './super-admin/parametres/alertes/alertes.component';
import { AvisComponent } from './super-admin/parametres/avis/avis.component';
import { MeritoiresComponent } from './super-admin/parametres/meritoires/meritoires.component';
import { ItinerairesComponent } from './super-admin/parametres/itineraires/itineraires.component';
import { InfoPersonnelComponent } from './super-admin/users/info-personnel/info-personnel.component';
import { AddAdminComponent } from './super-admin/users/add-admin/add-admin.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AdminsComponent } from './super-admin/users/admins/admins.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { AddRegionComponent } from './super-admin/regions/add-region/add-region.component';
import { EditRegionComponent } from './super-admin/regions/edit-region/edit-region.component';
import { AddDeptComponent } from './super-admin/regions/departements/add-dept/add-dept.component';
import { EditDeptComponent } from './super-admin/regions/departements/edit-dept/edit-dept.component';
import { AddVilleComponent } from './super-admin/regions/departements/villes/add-ville/add-ville.component';
import { EditVilleComponent } from './super-admin/regions/departements/villes/edit-ville/edit-ville.component';
import { AddOrgComponent } from './super-admin/regions/departements/villes/organes/add-org/add-org.component';
import { EditOrgComponent } from './super-admin/regions/departements/villes/organes/edit-org/edit-org.component';
import { AddQuartierComponent } from './super-admin/regions/departements/villes/quartiers/add-quartier/add-quartier.component';
import { EditQuartierComponent } from './super-admin/regions/departements/villes/quartiers/edit-quartier/edit-quartier.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    SuperAdminComponent,
    RegionsComponent,
    DepartementsComponent,
    VillesComponent,
    QuartiersComponent,
    OrganesComponent,
    UsersComponent,
    ProfilsComponent,
    StatisqtiquesComponent,
    AlertesComponent,
    AvisComponent,
    MeritoiresComponent,
    ItinerairesComponent,
    InfoPersonnelComponent,
    AddAdminComponent,
    AdminsComponent,
    AddRegionComponent,
    EditRegionComponent,
    AddDeptComponent,
    EditDeptComponent,
    AddVilleComponent,
    EditVilleComponent,
    AddOrgComponent,
    EditOrgComponent,
    AddQuartierComponent,
    EditQuartierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    ToolbarModule,
    DialogModule,
    DropdownModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
