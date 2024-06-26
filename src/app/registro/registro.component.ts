import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroObj: Registro;

  constructor(private http: HttpClient, private router: Router){
    this.registroObj = new Registro();
  }

  onRegister() {
    this.http.post('http://127.0.0.1:5000/api/usuarios/add', {
      id_usuario: this.registroObj.id_usuario,
      usuario: this.registroObj.usuario,
      contrasenna: this.registroObj.contrasenna,
      correo: this.registroObj.correo,
      numero: this.registroObj.numero,
      fecha_nacimiento: this.registroObj.fecha_nacimiento,
      ubigeo: this.registroObj.ubigeo
    }).subscribe((res: any) => {
      if (res.message === "Se añadió correctamente el usuario") {
        alert("Usuario registrado exitosamente");
        this.router.navigateByUrl('/login');
      } else {
        alert("Error en el registro: " + res.message);
      }
    });
  }
}

export class Registro {
  id_usuario: number;
  usuario: string;
  contrasenna: string;
  correo: string;
  numero: string;
  fecha_nacimiento: string;
  ubigeo: string;

  constructor(){
    this.id_usuario = 0;
    this.usuario = '';
    this.contrasenna = '';
    this.correo = '';
    this.numero = '';
    this.fecha_nacimiento = '';
    this.ubigeo = '';
  }
}
