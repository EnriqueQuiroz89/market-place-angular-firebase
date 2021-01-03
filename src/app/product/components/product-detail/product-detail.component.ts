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

  createProduct(){
    const newProduct: Product={
      id: '',
      title: 'Desde Angular',
      image: 'https://cdn.pixabay.com/photo/2018/06/12/19/42/football-3471307_960_720.jpg',
      price: 765298,
      description: `
      Tipo de imagen	JPG
      Resolución	4977×2931
      Creado	29 de Mayo de 2018
      Published	13 de Junio de 2018
      Categoría	Deportes
      Vistas	11083
      Descargas	6378`
    };
    this.productsService.createProduct(newProduct)

  }
}
