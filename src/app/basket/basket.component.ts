import { Component, OnInit } from '@angular/core';
import { AppComponent} from "../app.component";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private app: AppComponent) { }

  public basket = this.app.returnBasket();

  ngOnInit() {
  }

}
