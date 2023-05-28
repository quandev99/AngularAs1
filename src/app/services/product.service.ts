import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProduct } from 'src/app/interfaces/Product';
// import 'rxjs/add/operator/map';
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _http: HttpClient) {}
  private apiUrl = 'https://64649619127ad0b8f8a26311.mockapi.io/api/product';

  // Creat is Product
  addProduct(product: IProduct): Observable<any> {
    let params = JSON.stringify(product);
    return this._http.post(this.apiUrl, params);
  }
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.apiUrl}`);
  }

  // Get Product by Id from Product
  getProductID(id: number): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.apiUrl}/${id}`);
  }

  // Delete Product by Id from Product
  deleteProductId(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/${id}`);
  }

  // Update Product by Id from Product
  updateProduct(product: IProduct): Observable<IProduct> {
    return this._http.put<IProduct>(`${this.apiUrl}/${product.id}`, product);
  }
}
