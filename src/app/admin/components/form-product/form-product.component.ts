import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { ProductsService } from './../../../core/services/products/products.service';
// import { myValidators }   from '../../../utils/validators'
import { AngularFireStorage } from '@angular/fire/storage';
// Import Pipe Para cuando termine de subri la imagen
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  saveProduct(event: Event) {
    event.preventDefault(); //Quita la accion por defecto, que es recargar la pagina
    if (this.form.valid) {
      // Si el formulario es valido
      const product = this.form.value; //El form genera un Json Valido Y se asigna a product
      this.productsService
        .createProduct(product) //envio el producto cosntruido
        .subscribe((newProduct) => {
          // me suscribo a la respuesta
          console.log(newProduct); // imprimo la respuesta
          this.router.navigate(['./admin/products']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(10)]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  // No repite muchas veces
  get priceField() {
    return this.form.get('price');
  }

  uploadFile(event: Event) {
    // Proceso para subir la imagen
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    const nameImage = file.name;

    const fileRef = this.storage.ref(nameImage);
    //Observ que le da un no,bre y un archivo que subir
    const task = this.storage.upload(nameImage, file);
    //Import Pipe para notifica cuando finaliza la subida
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) => {
            console.log(url);
            this.form.get('image')?.setValue(url);
          });
        })
      )
      .subscribe(); //Rquiere para que se ejecute
  }
}
