/**
 * Created by herczkumihalybalazs on 2016.07.06..
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class LogoutService {
    constructor(private http:Http, private router:Router) {
    }

    private serverLoginUrl = 'http://localhost:8081/logout';  // URL to web API

    sendLogOut() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.serverLoginUrl, options)
            .toPromise()
            .then(()=> {
                this.gotToProfile();
            })
            .catch(this.handleError);
    }


    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        if (error.status == 403){
            alert('You are not logged in!')
        }
        else{
            alert("Server Error")
        }
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    gotToProfile() {
        this.router.navigate(['/login']);
    }
}