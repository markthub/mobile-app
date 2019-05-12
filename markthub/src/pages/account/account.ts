import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateAccountPage } from '../create-account/create-account';

import { RegexValidators } from '../validators/email.validator';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  credentialsForm: FormGroup;
  emailValid: boolean = true;
  passwordValid: boolean = true;

  public constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    
    this.credentialsForm = this.formBuilder.group({
      email: new FormControl(null, {
        validators: Validators.compose([
          Validators.pattern(RegexValidators.email),
          Validators.required
        ]), updateOn: 'submit'
      }),
      password: new FormControl(null, {
        validators: Validators.compose([
          Validators.pattern(RegexValidators.password),
          Validators.required
        ])
      }), updateOn: 'submit'
    });
  }

  public onSubmit() {    
    this.emailValid = this.credentialsForm.controls.email.valid && this.credentialsForm.controls.email.value != "";
    this.passwordValid = this.credentialsForm.controls.password.valid && this.credentialsForm.controls.email.value != "";

    // Login here
    if (this.credentialsForm.valid) {
      console.log('login');
    }
  }

  public onSignIn() {
    if (this.credentialsForm.valid) {
      this.credentialsForm.controls['email'].value;
      this.credentialsForm.controls['password'].value;
    }
  }

  public onSignUp() {
    this.navCtrl.push(CreateAccountPage);
  }

  public onForgotPassword() {
    console.log('forgot password');
  }
}