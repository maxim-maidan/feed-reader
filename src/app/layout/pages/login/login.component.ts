import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { filter, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { attemptLogin } from 'src/app/store/auth/auth.actions';

export interface SingIn {
  login: string;
  password: string;
  remember: boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<any>) { }

  singInForm: FormGroup;
  isEmptyForm: boolean = false;

  ngOnInit(): void {
    this.singInForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  singIn() {
    const { login: username, password } = this.singInForm.value;
    if (this.singInForm.value.login !== null && this.singInForm.value.password !== null) {
      this.store.dispatch(attemptLogin({ data: { username, password } }))
      this.isEmptyForm = false;
    }
    else{
      this.isEmptyForm = true;
    }

  }
  quickLogin() {
    this.singInForm.patchValue({ login: 'admin@mail.com', password: 'admin123' });
  }

}
