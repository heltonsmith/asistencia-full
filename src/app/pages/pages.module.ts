import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocenteComponent } from './docente/docente.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrarComponent } from './registrar/registrar.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    DocenteComponent,
    AlumnoComponent,
    RegistrarComponent,
    AsistenciaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule, // Include SharedModule for common components and modules
    IonicModule, // Include FormsModule for form validation
    FormsModule, // Include IonicModule for Ionic components
    ReactiveFormsModule
  ]
})
export class PagesModule { }
