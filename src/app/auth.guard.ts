import { User_serviceService } from './services/user_service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: User_serviceService ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      if (currentUser != null) {
          // logged in so return true
          return true;
      } else {

      // not logged in so redirect to login page with the return url
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
      return false;
      }

  }
  
}
