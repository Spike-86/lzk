import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {FindpartsComponent} from './findparts/findparts.component';
import {AuthorizationService} from './authorization.service';

const routes: Routes = [
  {path: 'findparts', component: FindpartsComponent, canActivate: [AuthorizationService]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
