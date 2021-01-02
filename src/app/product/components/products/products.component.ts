import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // Donde se guardaran los datos
  // Donde se guardaran los datos
  public products!: Product[];

  //Inyecto la depnedencia del service
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // Ejecuta al iniciar
    this.products = this.productsService.getAllProducts();
  }

  power = 10;

  clickProduct(product: Product): void {
    console.log('product' + product.title);
    console.log('id' + product.id);
  }
}
