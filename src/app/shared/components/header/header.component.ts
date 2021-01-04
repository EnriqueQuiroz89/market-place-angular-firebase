import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    // No es una suscripcion
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  // Con un pipe puedo monitorear cualquier flujo de datos

  ngOnInit(): void {}
}
