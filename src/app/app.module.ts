import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { FindpartsComponent } from './findparts/findparts.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    FindpartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
