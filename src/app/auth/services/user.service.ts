import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Router} from "@angular/router";
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx";
import {CookiesService} from "@ngx-utils/cookies";
import { Helpers } from '../../helpers';
@Injectable()
export class UserService {
    constructor(
        private http: Http, 
        private router: Router,
        private cookiesService: CookiesService
    ) {
    }
    verify() {  
        let me = this;
        return this.http.get('/api/authenService/verify', this.jwt()).map((response: Response) => response.json()).catch(function(error:any){
            console.log("Some error in catch");
            Helpers.setLoading(false);   
            me.router.navigate(['/logout']);
            return Observable.throw(error || 'Server error')
        });
    } 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = this.cookiesService.get('currentUser');
        let sesspc = sessionStorage.getItem("sesspc");
        if (currentUser) {
             let headers = new Headers({ 'Authorization': 'Bearer ' + JSON.stringify(currentUser),'sesspc':sesspc});
             return new RequestOptions({ headers: headers });
        }
        
    }
}