import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Lazuk {

  constructor(private http: HttpClient) {
  }

  getItems(art) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = {
      article: art
    };

    // const url = 'http://localhost:3030/byarticul';
    const fakeJSON = '../assets/fake.json';
    // return this.http.post(url, body, httpOptions);
    return this.http.get(fakeJSON);
  }

  getItemsBrand(brand, art) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = {
      brand: brand,
      article: art
    };

    const url = 'http://localhost:3030/bybrand';
    return this.http.post(url, body, httpOptions);
  }

}
