import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Asegúrate de que es 'styleUrls' y no 'styleUrl'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router){
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('http://127.0.0.1:5000/api/login/login', {
      correo: this.loginObj.correo,
      contrasenna: this.loginObj.contrasenna
    }).subscribe((res: any) => {
      if (res.message === "Credenciales incorrectas") {
        alert("Error");
      } else {
        console.log('User data received from server:', res.usuario); // Añadir un log para verificar la información recibida
        localStorage.setItem('user', JSON.stringify(res.usuario)); // Asegúrate de que 'res.usuario' tiene la información completa del usuario
        if (res.message === "Bienvenido Usuario") {
          this.router.navigateByUrl('/dashboard_usuario');
        } else if (res.message === "Bienvenido Especialista") {
          this.router.navigateByUrl('/dashboard_especialista');
        }
      }
    });
  }

  registrarUsuario(){
    this.router.navigateByUrl('/registro');
  }
}

export class Login {
  correo: string;
  contrasenna: string;

  constructor(){
    this.correo = '';
    this.contrasenna = '';
  }
}
