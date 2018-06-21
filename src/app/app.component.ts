import {Component} from '@angular/core';
import {GetItemsService} from "./services/get-items.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private inputVal = '';
  private basket = [];

  constructor(private getIt: GetItemsService) {
  }

  public myJsonString = [];

  postData() {

    this.getIt.getItems()
      .subscribe((data: any) => {
        // this.myJsonString = data
        console.log(data);
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
