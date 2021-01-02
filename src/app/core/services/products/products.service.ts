// Mision de un servicio es proveer de datos
import { Injectable } from '@angular/core';
import { Product } from './../../../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item=> id ===item.id)
  }
  // ngFor para representarlo
  // Creamos una interfaza para poder tipar los objetos de products[]
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 800,
      description: 'Buena camisa',
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 600,
      description: 'No se que es un hoddie',
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 700,
      description: 'Para programar',
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 600,
      description: 'EL titulo',
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 876,
      description: 'Un mega Sticker',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 800,
      description: 'tro sticker',
    },
  ];
}
