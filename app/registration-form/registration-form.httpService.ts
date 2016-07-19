/**
 * Created by herczkumihalybalazs on 2016.07.06..
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {User} from "../user";

@Injectable()
export class RegistrationFormHttpService {

    constructor(private http:Http) {
    }

    private serverLoginUrl = 'http://localhost:8081/registration';  // URL to web API

    sendRegistrationData(user:User) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.serverLoginUrl, user, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}