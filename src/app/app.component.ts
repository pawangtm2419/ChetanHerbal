import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  panelOpenState = false;
  wish: [];
  products: [];
  disease: [];
  error = '';
  success = '';
  constructor(public router: Router, public Login: AppService) { }

  ngOnInit() {
    this.getMarquee();
    this.getProducts();
    this.getDisease();
  }

  getLoggedIn() {
    const number = localStorage.getItem('username');
    if (this.Login.isLoggedIn && number.length === 10) {
      return true;
    } else {
      return false;
    }
  }

  getProducts(): void {
    this.Login.getProductData().subscribe((res: []) => {
      this.products = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }

  getDisease(): void {
    this.Login.getDiseaseData().subscribe((res: []) => {
      this.disease = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }

  getMarquee(): void {
    this.Login.getMarqueeData().subscribe((res: []) => {
      this.wish = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }
}
