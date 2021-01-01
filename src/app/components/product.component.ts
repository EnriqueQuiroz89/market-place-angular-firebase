// decoardor le da un contexto  ----> Le asigna un rol
import { Component, Input, Output, EventEmitter } from '@angular/core';


import { Product } from './../product.model'

/**Ever last class */
@Component({ selector: 'app-product',
             templateUrl: './product.component.html' })
export class ProductComponent {

    /**Mediante Input le ingreso el objeto
     * que recibi en app.component.html*/
    @Input() product : Product;    // En invocado en el template
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    addCart(){
        console.log('Añadido al carrito')
        this.productClicked.emit(this.product.id)
    }

    





}
