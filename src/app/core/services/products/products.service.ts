// Mision de un servicio es proveer de datos
import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
// El modulo ya lo tenemos en app.mode
import { HttpClient } from '@angular/common/http';

const URL_WS: string = 'https://platzi-store.herokuapp.com/products' 

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  
  //Inyecto la dependencia
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {      //Le indicamos que objeto esperamos
    return this.httpClient.get<Product[]>(URL_WS);
  }

  getProduct(id: string){
    return this.httpClient.get<Product[]>(`${URL_WS}/${id}`)
  }
  // ngFor para representarlo
  // Creamos una interfaza para poder tipar los objetos de products[]
 }
