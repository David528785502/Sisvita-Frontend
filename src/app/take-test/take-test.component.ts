import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TakeTestComponent implements OnInit {
  test: any;
  respuestas: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    const testStr = localStorage.getItem('currentTest');
    if (testStr) {
      this.test = JSON.parse(testStr);
      this.initializeRespuestas();
    } else {
      alert('No hay test seleccionado.');
      this.router.navigateByUrl('/dashboard_usuario/test-list');
    }
  }

  initializeRespuestas(): void {
    this.test.preguntas.forEach((pregunta: any) => {
      this.respuestas[pregunta.id_pregunta] = null;
    });
  }

  submitTest(): void {
    const resultado = {
      testId: this.test.id_test,
      respuestas: this.respuestas
    };

    // Enviar las respuestas al backend
    // Ajusta la URL del endpoint según tu backend
    this.router.navigateByUrl('/dashboard_usuario/test-results');
  }
}
