import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total = 0;

  constructor(private cartService: CartService) {
    // requiero escuchar los cambios en el carrito
    this.cartService.cart$
      .pipe(map((products) => products.length))
      .subscribe((total) => (this.total = total));
  }

  // Con un pipe puedo monitorear cualquier flujo de datos

  ngOnInit(): void {}
}
