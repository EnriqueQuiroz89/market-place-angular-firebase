import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { myValidators } from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  id!: string; // para hacer global el id traido del activatedRoute
  form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService
        .getProduct(this.id) // SOliciot al servicio el producto pasando un id
        .subscribe((product) => {
          this.form.patchValue(product); // Sendo Object to Formulario
        });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault(); //Quita la accion por defecto, que es recargar la pagina
    if (this.form.valid) {
      // Si el formulario es valido
      const product = this.form.value; //El form genera un Json Valido Y se asigna a product
      this.productsService
        .updateProduct(this.id, product)
        .subscribe((updatedProduct) => {
          // me suscribo a la respuesta
          console.log(updatedProduct); // imprimo la respuesta
          this.router.navigate(['./admin/products']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      //  id: ['', [Validators.required]], No quiero editar el id
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
