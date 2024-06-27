import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule] // Importa HttpClientModule aquí
})
export class TestResultsComponent implements OnInit {
  results: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('user')!).id_usuario;
    this.http.get(`http://127.0.0.1:5000/api/tests/results/${userId}`).subscribe((res: any) => {
      this.results = res;
    });
  }
}
