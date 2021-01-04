import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// Primero el modelo
import { Product } from '../../../core/models/product.model';
// Segunod el servicio de Cart
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  
  products$: Observable<Product[]>;

  constructor(private cartService: CartService) {
    //Escucha continua de los elemnto que se agregan al carrito
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {}
}
