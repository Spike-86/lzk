import { Component, OnInit } from '@angular/core';
import {Lazuk} from '../services/lazuk';

@Component({
  selector: 'app-findparts',
  templateUrl: './findparts.component.html',
  styleUrls: ['./findparts.component.css']
})
export class FindpartsComponent implements OnInit {

  private inputVal = '';
  private basket = [];

  constructor(private getIt: Lazuk) {
  }

  public myJsonString = [];
  public brands = [];

  getByBrand(brand, art) {
    this.getIt.getItemsBrand(brand, art)
      .subscribe((data: any) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          data[i].postavsh = 'Лазюк';
        }
        this.myJsonString = data;
      }, error => console.log('Ошибка'));
  }

  getByArticul(val) {
    this.getIt.getItems(val)
      .subscribe((data: any) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          data[i].postavsh = 'Лазюк';
        }
        this.myJsonString = data;
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


  ngOnInit() {
  }

}
