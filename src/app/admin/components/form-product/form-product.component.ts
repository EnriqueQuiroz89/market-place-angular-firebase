import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { myValidators }   from '../../../utils/validators'


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {

       this.buildForm();
  }

  ngOnInit() {
  }


  saveProduct(event: Event) {
    event.preventDefault();  //Quita la accion por defecto, que es recargar la pagina
    if (this.form.valid) {     // Si el formulario es valido
      const product = this.form.value;  //El form genera un Json Valido Y se asigna a product
      this.productsService.createProduct(product)   //envio el producto cosntruido
      .subscribe((newProduct) => {               // me suscribo a la respuesta
        console.log(newProduct);                // imprimo la respuesta  
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, myValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  // No repite muchas veces
  get priceField() {  
    return this.form.get('price');
  }



}