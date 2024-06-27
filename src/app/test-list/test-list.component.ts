import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class TestListComponent implements OnInit {
  tests: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/api/tests/tests')
      .subscribe((data: any) => {
        this.tests = data;
      }, error => {
        console.error('Error fetching tests:', error);
      });
  }

  takeTest(test: any) {
    localStorage.setItem('currentTest', JSON.stringify(test));
    this.router.navigateByUrl('/dashboard_usuario/take-test');
  }
}
