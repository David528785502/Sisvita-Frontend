import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardUsuarioComponent } from './dashboard/dashboard-usuario/dashboard-usuario.component';
import { DashboardEspecialistaComponent } from './dashboard/dashboard-especialista/dashboard-especialista.component';
import { TestListComponent } from './test-list/test-list.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { TestResultsComponent } from './test-results/test-results.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'dashboard_usuario',
    component: DashboardUsuarioComponent,
    children: [
      { path: 'test-list', component: TestListComponent },
      { path: 'take-test', component: TakeTestComponent },
      { path: 'test-results', component: TestResultsComponent }
    ]
  },
  { path: 'dashboard_especialista', component: DashboardEspecialistaComponent }
];
