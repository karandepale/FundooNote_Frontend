import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/AUTH/auth.service';

@Injectable({
  providedIn: 'root'
})

export class authguardGuard implements CanActivate {
  constructor(private auth : AuthService , private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.loggedin()){
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
      
  }
  
}






