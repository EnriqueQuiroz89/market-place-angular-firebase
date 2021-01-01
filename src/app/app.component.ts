import { Component } from '@angular/core';
import { Interface } from 'readline';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-store';

//ngFor para representarlo
items = ['nicolas', 'javier', 'leonel']

//ngFor tambien
products : Product[] = [
  {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 800,
    description: 'Buena camisa'
  },
  {
    id: '2',
    image: 'assets/images/hoodie.png',
    title: 'Hoodie',
    price: 600,
    description: 'No se que es un hoddie'
  },
  {
    id: '3',
    image: 'assets/images/mug.png',
    title: 'Mug',
    price: 700,
    description: 'Para programar' 
  },
  {
    id: '4',
    image: 'assets/images/pin.png',
    title: 'Pin',
    price: 600,
    description: 'EL titulo'
  },
  {
    id: '5',
    image: 'assets/images/stickers1.png',
    title: 'Stickers',
    price: 876  ,
    description: 'Un mega Sticker'
  },
  {
    id: '6',
    image: 'assets/images/stickers2.png',
    title: 'Stickers',
    price: 800,
    description: 'tro sticker'
  },
];

//funcion al hacer click en  agregar Item
agregarItem(){
    this.items.push('nuevo item')
}


eliminarItem(index: number){
  this.items.splice(index, 1);
}

}

