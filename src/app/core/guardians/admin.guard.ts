import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
// Usar un pipe para determinar que hacer con la respuesta del Observable de AuthService
import { map, tap } from   'rxjs/operators'; 
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


constructor(private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 // tap intercepta un flujo de datos pero no lo modifica
  return this.authService.hasUser().pipe(
    tap(user=> console.log(user?.email)), // intercepto el flujo para ver por que pasaba al admin
    map(user => user=== null ? false: true));

  }
  



 

}
