import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { CookiesService } from "@ngx-utils/cookies";
import { Observable } from "rxjs/Rx";
import { Router} from "@angular/router";
import { MastEmppaytype } from "../models/mastEmppaytype";
@Injectable()
export class  PayrollService {
    constructor(private http: Http, private router: Router,private cookiesService: CookiesService) {
    }
    rootUri: String = "/api/payrollService"
    getEmployeeNameApi(empCode:String) {
        let me = this;
        return this.http.get(this.rootUri+'/getEmployeeName/'+empCode ,this.jwt()).map((response: Response) => response.json()).catch(function(error:any){
            if (error.status === 401){
                alert("unauthorization..");
                me.router.navigate(['/logout']);
            }
            return Observable.throw(error || 'Server error')
        });
    }
    getBankApi(bankCode:String) {
        let me = this;
        return this.http.get(this.rootUri+'/getBank/'+bankCode ,this.jwt()).map((response: Response) => response.json()).catch(function(error:any){
            if (error.status === 401){
                alert("unauthorization..");
                me.router.navigate(['/logout']);
            }
            return Observable.throw(error || 'Server error')
        });
    }
    
    getMastEmppaytype(employeeSeq:String) {
        let me = this;
        return this.http.get(this.rootUri+'/getMastEmppaytype/'+employeeSeq ,this.jwt()).map((response: Response) => response.json()).catch(function(error:any){
            if (error.status === 401){
                alert("unauthorization..");
                me.router.navigate(['/logout']);
            }
            return Observable.throw(error || 'Server error')
        });
    }
    saveMastEmppaytype(data: MastEmppaytype) {  
        let me = this;
        return this.http.post(this.rootUri+'/saveMastEmppaytype', JSON.stringify(data),this.jwtAndJsonData())
            .map((response: Response) => response.json()).catch(function(error:any){
                if (error.status === 401){
                    alert("unauthorization..");
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
        });
    }

    // create(user: any) {
    //     return this.http.post('/api/users', this.jwt()).map((response: Response) => response.json());
    // }
    // getById(id: number) {
    //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }
    // update(user: any) {
    //     return this.http.put('/api/users/', this.jwt()).map((response: Response) => response.json());
    // }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods
    private jwtAndJsonData() {
        // create authorization header with jwt token
        let currentUser = this.cookiesService.get('currentUser');
        let sesspc = sessionStorage.getItem("sesspc");
        if (currentUser) {
             let headers = new Headers({ 'Authorization': 'Bearer ' + JSON.stringify(currentUser),'sesspc':sesspc,'Content-Type': 'application/json'});
             return new RequestOptions({ headers: headers });
        }
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