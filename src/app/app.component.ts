import {Component} from '@angular/core';
import {Lazuk} from './services/lazuk';
import {BrandsService} from './services/brands.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private inputVal = '';
  private basket = [];

  constructor(private getIt: Lazuk, private getBrand: BrandsService) {
  }

  public myJsonString = [];
  public brands = [];

  getByBrand(brand, art) {
    this.getIt.getItemsBrand(brand, art)
      .subscribe((data: any) => {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
          data[i].postavsh = 'Лазюк';
        }
        this.myJsonString = data;
      }, error => console.log('Ошибка'))
  }

  getByArticul(val) {
    this.getIt.getItems(val)
      .subscribe((data: any) => {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
          data[i].postavsh = 'Лазюк';
        }
        this.myJsonString = data;
      }, error => console.log('Ошибка'));
  }

  getBrands() {

    this.getBrand.getBrands()
      .subscribe((data: any) => {
        console.log(JSON.parse(data.responseText));
        this.brands = JSON.parse(data.responseText)
      }, error => console.log('Ошибка'));

  }


  addItem(arg) {
    this.basket.push(arg);
    console.log(JSON.stringify(this.basket));
  }

  setVal(value: string) {
    if (value) {
      this.inputVal = value;
    }
  }

  returnBasket() {
    return this.basket;
  }

}
