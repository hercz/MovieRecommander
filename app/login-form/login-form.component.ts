/**
 * Created by herczkumihalybalazs on 2016.06.21..
 */
import {Component} from "@angular/core";
import {User} from "../user";
import {Router} from "@angular/router";
import {LoginHttpService} from "./login-form.httpservice";
import {Observable} from "rxjs/Rx";


@Component({
    selector: 'log',
    templateUrl: 'app/login-form/login-form.component.html',
    styleUrls: ['app/login-form/login-form.component.css'],
    providers: [LoginHttpService]
})
export class LoginFieldComponent {
    errorMessage:string;
    user:User = new User;
    submitted:boolean = false;
    mode = 'Observable';

    constructor(private router:Router, private loginHttpService:LoginHttpService) {
    }

    onSubmit() {
        this.sendLoginData(this.user);
        this.submitted = true;
    }

    active = true;

    sendLoginData(user:User) {
        this.loginHttpService.sendLoginData(user)
            .then(
                error => this.errorMessage = <any>error
            )
    }

    gotToRegistration() {
        this.router.navigate(['/registration']);
    }
}