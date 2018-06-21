import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {

  constructor(private http: HttpClient) {
  }

  getItems() {
    // let authorization = 'R4RvQG61KheGVuGPJCOrwgtt';
    let js = [
      {
        'art': 55426,
        'rabart': 55426,
        'brand': 'AUGER',
        'naim': 'Опора приводного вала',
        'qty': '>10',
        'minqty': 1,
        'price': 92.038,
        'rprice': null,
        'val': 3,
        'dlv': 10,
        'napr': 51,
        'key': 'ICBYB8ABB5',
        'prob': 99.0
      },
      {
        'art': 55426,
        'rabart': 55426,
        'brand': 'RUVILLE',
        'naim': 'Ролик натяжителя ремня ГРМ',
        'qty': '>10',
        'minqty': 1,
        'price': 66.799,
        'rprice': null,
        'val': 3,
        'dlv': 10,
        'napr': 51,
        'key': 'ICBY338470',
        'prob': 99.0
      }
    ];

    let jso = JSON.stringify(js);
    let body = {
      // format: 'json',
      // art: 'oc195'
    };
    // let urlToJson: string = 'assets/fake.json';
    let urlLazyuk = 'http://178.124.159.37:5454/api/v1/price/getitems?format=json&art=oc195';
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Request-Method': 'POST',
        'Content-Type': 'text/plain',
        'Authorization': 'Bearer R4RvQG61KheGVuGPJCOrwgtt'
      })
    };
    // return this.http.get(urlLazyuk, httpOptions)
    return this.http.post(urlLazyuk, body)
  }

}
