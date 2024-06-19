import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any = null;

  constructor(private http: HttpClient, private router: Router) { }

  login(correo: string, contrasenna: string) {
    return this.http.post('http://127.0.0.1:5000/api/usuarios/login', {
      correo,
      contrasenna
    }).toPromise().then((res: any) => {
      if (res.result) {
        this.user = res.user;
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('Error en el inicio de sesión');
      }
    }).catch(error => {
      alert('Ocurrió un error inesperado');
    });
  }

  getUser() {
    return this.user;
  }
}
