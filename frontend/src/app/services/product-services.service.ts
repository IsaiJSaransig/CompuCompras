import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { GetProductDto } from '../dtos/get-product.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  private url = `${environment.url}products/`;
  constructor(private http: HttpClient) { }
  
  

  getProducts(): Observable<GetProductDto[]> {
    return this.http.get<GetProductDto[]>(this.url);
  }

  getProduct(id: number): Observable<GetProductDto> {
    return this.http.get<GetProductDto>(`${this.url}${id}`);
  }
}
