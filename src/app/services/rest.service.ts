import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = 'https://nooraan.com/';
  key = 'ck_223fb935e24e5ce25d8bf4f2473d370f4a69c724';
  secretKey = 'cs_e572389df96511fdc793a35d9c3f088a4dc035c0';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(page: number) {
    const params = new HttpParams().set('consumer_key', this.key)
      .set('consumer_secret', this.secretKey)
      // .set('per_page', '6')
      .set('page', page.toString())
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'wp-json/wc/v2/products', { params, observe: 'response' }).subscribe(data => {
        // Read the result field from the JSON response.
        resolve(data.body);
      });
    });
  }

  getProduct(id) {
    const params = new HttpParams().set('consumer_key', this.key)
      .set('consumer_secret', this.secretKey)
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'wp-json/wc/v2/products/' + id, { params }).subscribe(data => {
        // Read the result field from the JSON response.
        resolve(data);
      });
    });
  }
}
