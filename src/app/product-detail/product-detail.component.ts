import { Component, OnInit } from '@angular/core';
//Agregar routing para filtra el contenido de un solo producto
import { ActivatedRoute, Params } from '@angular/router'
import { Product } from '../product.model';
import { ProductsService } from './../../app/products.service'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

product!: Product;

  //A esto se le llama inyeccion de dependencias
  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit(): void {  
    this.route.params.subscribe((params: Params)=> {
      const id = params.id  // deserialozo el JSON y extraigo el id
      this.product  = this.productsService.getProduct(id) as Product;
    });
  }

}
