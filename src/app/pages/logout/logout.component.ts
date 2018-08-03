import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../auth/services/authentication.service";
import { Helpers } from "../../helpers";
@Component({
    selector: 'app-logout',
    templateUrl: '../logout/logout.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class LogoutComponent implements OnInit {

    constructor(private _router: Router,
        private _authService: AuthenticationService) {
    }

    ngOnInit(): void {
        Helpers.setLoading(true);
        // reset login status
        this._authService.logout();
        this._router.navigate(['/login']);
    }
}