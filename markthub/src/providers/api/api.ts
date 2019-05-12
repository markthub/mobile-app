import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  private baseUrl: string = "";

  public constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://192.168.99.100:8000";
  }

  // Sending a GET request to /products
  public getProducts(storeId: number, page: number) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/stores/' + storeId + '/products?page=' + page)
        .subscribe((resp: any) => {
          resolve(resp.data.products);
        }, err => {
          this.errorHandler(err);
        });
    });
  }

  // Sending a GET request to /stores/:id/products/:id
  public getProductById(storeId, productId: number) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/stores/' + storeId + '/products/' + productId)
        .subscribe((resp: any) => {
          resolve(resp.data.product);
        }, err => {
          this.errorHandler(err);
        })
    });
  }

  // Sending a GET request to /stores/:id/products?category=...
  public getProductsByCategory(storeId: number, page: number, categories: string) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/stores/' + storeId + '/products?page=' + page + '&categories=' + categories)
        .subscribe((resp: any) => {
          resolve(resp.data.products);
        }, err => {
          this.errorHandler(err);
        });
    });
  }

  // Sending a GET request to /stores/:id/categories
  public getCategories(storeId: number, page: number) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/stores/' + storeId + '/categories?page=' + page)
        .subscribe((resp: any) => {
          resolve(resp.data.categories);
        }, err => {
          this.errorHandler(err);
        });
    });
  }

  // Sending a GET request to /stores/:id/products?name=...
  public searchProducts(storeId: number, page: number, productName: string) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/stores/' + storeId + '/products?page=' + page + '&name=' + productName)
        .subscribe((resp: any) => {
          resolve(resp.data.products);
        }, err => {
          this.errorHandler(err);
        });
    });
  }

  private errorHandler(error: any): void {
    console.log(error)
  }
}
