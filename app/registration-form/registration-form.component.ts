import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Control, FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "@angular/common";
import {CustomValidators, matchingPasswords} from "./custom-validators";
import {RegistrationFormHttpService} from "./registration-form.httpService";
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';
import {User} from "../user";


@Component({
    selector: 'reg',
    directives: [FORM_DIRECTIVES, MODAL_DIRECTIVES],
    providers: [RegistrationFormHttpService],
    templateUrl: 'app/registration-form/registration-form.component.html',
    styleUrls: ['app/registration-form/registration-form.component.css']
})

export class RegistrationFieldComponent {
    errorMessage:string;
    mode = 'Observable';
    user:User=new User;


    firstName:Control;
    lastName:Control;
    nickName:Control;
    email:Control;
    gender:Control;
    birthDate:Control;
    address:Control;
    password:Control;
    confirmPassword:Control;
    group:ControlGroup;



//TODO: kiszervezes
//TODO: magic numbers kiszervezes
//TODO: fuggvenyhivasok ksizervezese - validators.compose best practise?

    constructor(private router:Router, private registrationFormHttpService:RegistrationFormHttpService, builder:FormBuilder) {
        this.firstName = new Control('', Validators.compose([Validators.required, Validators.maxLength(30), CustomValidators.nameFormat]));
        this.lastName = new Control('', Validators.compose([Validators.required, Validators.maxLength(50), CustomValidators.nameFormat]));
        this.nickName = new Control('', Validators.maxLength(20));
        this.email = new Control('', Validators.compose([Validators.required, CustomValidators.emailFormat]));
        this.address = new Control('', Validators.maxLength(150));
        this.birthDate = new Control('', Validators.required);
        this.gender = new Control('', Validators.required);
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50), CustomValidators.passwordFormat]));
        this.confirmPassword = new Control('', Validators.required);
        this.group = builder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            nickName: this.nickName,
            email: this.email,
            gender: this.gender,
            birthDate: this.birthDate,
            address: this.address,
            password: this.password,
            confirmPassword: this.confirmPassword
        }, {validator: matchingPasswords('password', 'confirmPassword')});
    }

    sendRegistrationData(user:User) {
        this.registrationFormHttpService.sendRegistrationData(user)
            .subscribe(
                error => this.errorMessage = <any>error);
    }

    private instantiatesUserObject() {
        this.user.firstName = this.firstName.value;
        this.user.lastName = this.lastName.value;
        this.user.nickName = this.nickName.value;
        this.user.email = this.email.value;
        this.user.address = this.address.value;
        this.user.birthDate = this.birthDate.value;
        this.user.gender = this.gender.value;
        this.user.password = this.password.value;
    }

    onSubmit() {
        //instantiates a user object
        this.instantiatesUserObject();

        //send that user object
        this.sendRegistrationData(this.user);
    }

    gotToProfileFromReg() {
        //navigate to Profile
        this.router.navigate(['/profile']);
    }


}
