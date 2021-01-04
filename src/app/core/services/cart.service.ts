import { Injectable } from '@angular/core';

import { Product } from './../models/product.model';
import { BehaviorSubject } from 'rxjs'; // add principios reactivos

//facilito que cualquier componete pueda preguntar cuantos articulos hay en el carrito

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]); // inicializo carrito vacio
  //Nueva observable que ofrece monitoreo de los cambios en una variable que sera carrito
  cart$ = this.cart.asObservable();

  constructor() {}

  addCart(product: Product) {
    //Creo una nueva referencia del arreglo productos actual y a esta
    // le concateno el nuevo producto , enseguida la actualizo a si misma
    this.products = [...this.products, product];
    // Notifico a los suscriptores que hay cambios en el nuevo estado creado
    this.cart.next(this.products);
  }
}
