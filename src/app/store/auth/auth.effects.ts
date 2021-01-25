import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { LoginService } from "src/app/services/login.service";
import * as AuthActions from "./auth.actions";
import { User } from "./auth.model";


@Injectable()
export class AuthEffects {
    constructor(private actions: Actions, private login: LoginService, private router: Router) {

    }

    attemptLogin$ = createEffect(() => this.actions.pipe(
        ofType(AuthActions.attemptLogin),
        switchMap(({ data }) => this.login.auth(data).pipe(
            map((user: User) => {
                this.router.navigate(['/feeds']);
                return AuthActions.loginSuccess({ user })
            }),
            catchError(() => of(AuthActions.loginFailed()))
        ))
    ));
    logOut$ = createEffect(() => this.actions.pipe(
        ofType(AuthActions.logOut),
        map(() => {
            this.router.navigate(['/login']);
        })
    ),{dispatch: false});
    showAcc$ = createEffect(() => this.actions.pipe(
        ofType(AuthActions.showAcc),
        map(() => {
            this.router.navigate(['/account']);
        })
    ),{dispatch: false});
}
