import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuState {
  [key: string]: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Cambiado a styleUrls
})
export class DashboardComponent implements OnInit {
  user: any = {};
  isMinimized: boolean = false;
  isMenuOpen: MenuState = {};

  constructor(private router: Router) {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.user = JSON.parse(userStr);
    } else {
      alert('No hay usuario logeado, redirigiendo a login.');
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {}

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
  }

  toggleMenu(menu: string) {
    this.isMenuOpen[menu] = !this.isMenuOpen[menu];
  }

  navigateTo(route: string) {
    // Aquí puedes manejar la lógica de navegación según tu configuración de rutas
    console.log(`Navigating to ${route}`);
    this.router.navigateByUrl(`/${route}`);
  }

  logout() {
    // Aquí puedes manejar la lógica de cierre de sesión
    console.log('Logging out');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
