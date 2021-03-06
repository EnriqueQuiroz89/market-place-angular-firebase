import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
// Usar un pipe para determinar que hacer con la respuesta del Observable de AuthService
import { map, tap } from   'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 // tap intercepta un flujo de datos pero no lo modifica
  return this.authService.hasUser().pipe(
    map(user => user=== null ? false: true), //despues del pipe ya no existe el user
    tap(hasUser=>{  
      if(!hasUser){
        this.router.navigate(['/auth/login'])
      }
    }))

}

}
