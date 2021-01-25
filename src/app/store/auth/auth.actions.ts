import { Action, createAction, props } from "@ngrx/store";
import { User } from "./auth.model";

export enum authActionsType {
    login = '[Auth] Attempt to Login',
    logOut = '[Auth] Log Out',
    showAccount = '[Auth] Show Account',
    success = '[Auth] Login Success',
    failed = '[Auth] Login Failed',
};


export const attemptLogin = createAction(
    authActionsType.login,
    props<{ data: { username: string, password: string } }>()
);
export const logOut = createAction(
    authActionsType.logOut
);
export const showAcc = createAction(
    authActionsType.showAccount
);

export const loginSuccess = createAction(
    authActionsType.success,
    props<{user: User}>()
)
export const loginFailed = createAction(
    authActionsType.failed,
)
