import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) {}

  getBrands() {
    let url = 'http://localhost:3030/brands';
    return this.http.get(url);
  }

}
