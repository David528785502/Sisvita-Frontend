import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router){
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('http://127.0.0.1:5000/api/usuarios/login', {
      correo: this.loginObj.correo,
      contrasenna: this.loginObj.contrasenna
    }).subscribe((res: any) => {
      if (res.result) {
        alert("Error");
      } else {
        localStorage.setItem('user', JSON.stringify(res.usuario));
        this.router.navigateByUrl('/dashboard');
        console.log(localStorage.getItem('user'));
      }
    });
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