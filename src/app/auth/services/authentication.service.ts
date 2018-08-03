import { Injectable } from "@angular/core";
import { Http, Response,RequestOptions,Headers  } from "@angular/http";
import "rxjs/add/operator/map";
import {CookiesService} from "@ngx-utils/cookies";

@Injectable()
export class AuthenticationService {

    constructor(private http: Http,private cookiesService: CookiesService) {
    } 

    login(username: string, password: string) {  
        let sesspc = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        let head = new Headers({ 'Content-Type': 'application/json','sesspc':sesspc});
        let requestOptions = new RequestOptions({headers: head});
        return this.http.post('/api/authenService/authenticate', JSON.stringify({ username: username, password: password }),requestOptions)
            .map((response: Response) => { 
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {  
                    // store user details and jwt token in local storage to keep user logged in between page refreshesy
                    let expiredDate = new Date();
                    expiredDate.setDate(expiredDate.getDate() + 1 );
                    sessionStorage.setItem("sesspc", sesspc);
                    sessionStorage.setItem("fullname",username);
                    this.cookiesService.put('currentUser', user.token,{
                        //expires: expiredDate,
                        httpOnly: true
                    });
                    //localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
       
    }
    
    logout() {
        // remove user from local storage to log user out
        this.cookiesService.remove('currentUser',{
            httpOnly: true
        });
        //localStorage.removeItem('currentUser');
    }
    
}