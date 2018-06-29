import { Component, OnInit } from '@angular/core';
import { FindpartsComponent} from '../findparts/findparts.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private findParts: FindpartsComponent) { }

  public basket = this.findParts.returnBasket();

  ngOnInit() {
  }

}
