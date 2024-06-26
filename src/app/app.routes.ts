import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardUsuarioComponent } from './dashboard/dashboard-usuario/dashboard-usuario.component';
import { DashboardEspecialistaComponent } from './dashboard/dashboard-especialista/dashboard-especialista.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login' , pathMatch:'full' 
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'dashboard_usuario',
        component: DashboardUsuarioComponent
    },
    {
        path: 'dashboard_especialista',
        component: DashboardEspecialistaComponent
    }
];
