import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs/Rx";
import { Helpers } from '../../helpers';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
       return true;
        /*return this._userService.verify().map(  
            data => {
                if (data !== null) {
                    // logged in so return true
                    return true;    
                }
                // error when verify so redirect to login page with the return url
                Helpers.setLoading(false);
                this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                return false;
            },
            error => {
                // error when verify so redirect to login page with the return url
                this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                return false;
            });*/
    }
}