// decoardor le da un contexto  ----> Le asigna un rol
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

import { Product } from './../product.model';

 // Ever last class
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy {
  // Mediante Input le ingreso el objeto
  // que recibi en app.component.html
  @Input() product!: Product; // En invocado en el template
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  // Objeto tipo Fecha
  today = new Date();

  constructor() {
    console.log('1.constructor'); // Me deja ver cuantas veces se crearo objetos
  }

  // Forma nativa de identificar cambios
  // ngOnChanges(changes: SimpleChanges) {
  // console.log('2.ngOnChanges'); // Seguimiento de cambios
  // console.log(changes);
  //   }

  ngOnInit(): void {
    console.log('3.ngOnInit');
  }

  // Forma personlizada de identificar cambios
  ngDoCheck(): void {
    console.log('4.DoCheck');
  }

  ngOnDestroy(): void {
    // Util para quitar suscriptores y liberar memoria
    console.log('5.DoCheck');
  }

  addCart(): void {
    console.log('3.Añadido al carrito');
   this.productClicked.emit(this.product.id);
  }
}
