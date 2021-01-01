// decoardor le da un contexto  ----> Le asigna un rol
import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Product } from './../product.model'

/**Ever last class */
@Component({ selector: 'app-product',
             templateUrl: './product.component.html' })
export class ProductComponent {


    producto: Product = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 800,
        description: 'Buena camisa'
      }



}
