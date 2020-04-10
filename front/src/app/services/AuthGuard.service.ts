import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log('not authenticated');
      this.router.navigate(['adminLogin']);
      return false;
    }

    console.log('authenticated');

    return true;
  }
}