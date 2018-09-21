import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private options = {
    withCredentials: false
  };

  private transactionsURL = environment.transactionsURL;
  private currencyURL = environment.currencyURL;


  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<Products[]> {
    return <Observable<Products[]>>this.httpClient.get(this.transactionsURL, this.options);

  }
}
