import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuState {
  [key: string]: boolean;
}

@Component({
  selector: 'app-dashboard-usuario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent implements OnInit {
  user: any = {};
  isMinimized: boolean = false;
  isMenuOpen: MenuState = {};

  constructor(private router: Router) {}

  ngOnInit() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.user = JSON.parse(userStr);
    } else {
      alert('No hay usuario logeado, redirigiendo a login.');
      this.router.navigateByUrl('/login');
    }
  }

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
  }

  toggleMenu(menu: string) {
    this.isMenuOpen[menu] = !this.isMenuOpen[menu];
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(`/dashboard_usuario/${route}`);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
