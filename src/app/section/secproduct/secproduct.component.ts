import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-secproduct',
  templateUrl: './secproduct.component.html',
  styleUrls: ['./secproduct.component.css']
})
export class SecproductComponent implements OnInit {
  products: [];
  id: any;
  productid: any;
  error = '';
  constructor(private route: ActivatedRoute, private service: AppService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProductData().subscribe((res: []) => {
      this.products = res;
    },
    (err) => {
      this.error = err;
    }
    );
  }

  getLoggedIn() {
    const number = localStorage.getItem('username');
    if (this.service.isLoggedIn && number.length === 10) {
      return true;
    } else {
      return false;
    }
  }

  addToCart(id): void {
   console.log(id);
   console.log(this.products);
  }
 }
