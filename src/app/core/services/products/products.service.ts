// Mision de un servicio es proveer de datos
import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
// El modulo ya lo tenemos en app.mode
import { HttpClient } from '@angular/common/http';
// Importo variable de ambiente de la URL
import { environment } from './../../../../environments/environment';

const URL_WS: string = environment.URL_WS;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //Inyecto la dependencia
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    //Le indicamos que objeto esperamos
    return this.httpClient.get<Product[]>(`${URL_WS}/products`);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${URL_WS}/products/${id}`);
  }

  // Uso del metodo POST para crear un nuveo Item
  createProduct(product: Product) {
    return this.httpClient
      .post(`${URL_WS}/products/`, product);
  }
  //Requiero id y el cuerpo json
  updateProduct(id: string, changes: Partial<Product>){
   return this.httpClient
               .put(`${URL_WS}/products/${id}`,changes);
  }

  deleteProduct(id: string ){
    return this.httpClient.delete(`${URL_WS}/products/${id}`);
  }

}
