import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    return true;
  }
}
