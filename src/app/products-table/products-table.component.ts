import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { DataSource } from '@angular/cdk/collections';
import { Products } from '../models/products.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  dataSource = new ProductsDataSource(this.productsService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['currency', 'sku', 'amount'];

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit() {
  }
}
  export class ProductsDataSource extends DataSource<any> {
    constructor(
      private productsService: ProductsService
    ) {
      super();
    }

    connect(): Observable<Products[]> {
      return this.productsService.getProducts();
    }

    disconnect() {}
  }

