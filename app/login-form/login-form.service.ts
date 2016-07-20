/**
 * Created by herczkumihalybalazs on 2016.07.05..
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {User} from "../user";

@Injectable()
export class LoginService {

    constructor(private router:Router, private http:Http) {
    }

    private serverLoginUrl = 'http://localhost:8081/login';  // URL to web API

    sendLoginData(user:User) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.serverLoginUrl, user, options)
            .toPromise()
            .then(()=> {
                this.gotToProfileFromLog();
            })
            .catch(this.handleError);
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        if (error.status == 401) {
            alert("Bad username or password!");
        }
        else {
            alert("Server Error")
        }
        console.log(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private gotToProfileFromLog() {
        this.router.navigate(['/profile']);
    }
}