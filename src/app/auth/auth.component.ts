import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../utils/_services/script-loader.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service'; 
import { UserService } from './services/user.service';
import { AlertComponent } from './directives/alert.component';
import { LoginComponent } from '../pages/login/login.component';
import { Helpers } from '../helpers';

@Component({
    selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
    templateUrl: '../pages/login/login.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class AuthComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    @ViewChild('alertSignin',
        { read: ViewContainerRef }) alertSignin: ViewContainerRef;
    @ViewChild('alertSignup',
        { read: ViewContainerRef }) alertSignup: ViewContainerRef;
    @ViewChild('alertForgotPass',
        { read: ViewContainerRef }) alertForgotPass: ViewContainerRef;

    constructor(
        private _router: Router,
        private _script: ScriptLoaderService,
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _authService: AuthenticationService,
        private _alertService: AlertService,
        private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.model.remember = true;
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/demo/demo2/base/scripts.bundle.js'], true).then(() => {
                Helpers.setLoading(false);
                LoginComponent.init();
            });
    }

    signin() {
        this.loading = true;
        this._router.navigate([this.returnUrl]);
        /*this._authService.login(this.model.username, this.model.password).subscribe(
            data => {
                this._router.navigate([this.returnUrl]);
            }, 
            error => {
                this.showAlert('alertSignin');
                this._alertService.error("username or password is incorrect");
                this.loading = false;
            });*/
    }


    showAlert(target) {
        this[target].clear();
        let factory = this.cfr.resolveComponentFactory(AlertComponent);
        let ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}