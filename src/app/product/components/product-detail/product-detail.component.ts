import { Component, OnInit } from '@angular/core';
//Agregar routing para filtra el contenido de un solo producto
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  //A esto se le llama inyeccion de dependencias
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id; // deserialozo el JSON y extraigo el id
      this.fecthProduct(id);
    });
  }

  //Usando el principio de una sola responsabilidad

  fecthProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }
}
