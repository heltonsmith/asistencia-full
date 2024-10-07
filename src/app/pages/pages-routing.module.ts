import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from '../guard/auth.guard';
import { redirectIfAuthGuard } from '../guard/redirect-if-auth.guard';
import { DocenteComponent } from './docente/docente.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'asistencia/:codigo/:usuario/:fecha', component: AsistenciaComponent},
  { path: 'login', component: LoginComponent, canActivate: [redirectIfAuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [authGuard]},
  { path: 'docente', component: DocenteComponent, canActivate: [authGuard]},
  { path: 'alumno', component: AlumnoComponent, canActivate: [authGuard]},
  { path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
