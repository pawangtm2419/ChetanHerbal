import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: [];
  error: '';
  constructor(private service: AppService) { }

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

}
