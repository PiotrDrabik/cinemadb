import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AlertHelperComponent } from "../resources/alert-helper/alert-helper.component";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router,
                private alertHelper: AlertHelperComponent) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if ( this.authService.isAuthenticated() === false ) {
            this.alertHelper.addAlert({title: 'Unauthorised error!' , message: 'You\'re not authorised to see \'Members\' page'});
            this.router.navigate(['/']);
        }
        return this.authService.isAuthenticated()
    }
}
