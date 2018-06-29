import {Component} from '@angular/core';
import {AuthorizationService} from './authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authorization: AuthorizationService) {}

   booleanAuth = this.authorization.canActivate();

}
