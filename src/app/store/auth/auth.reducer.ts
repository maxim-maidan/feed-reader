import { createReducer, on, Action } from "@ngrx/store";
import { loginSuccess, logOut } from "./auth.actions";
import { User } from "./auth.model";


export interface AuthState {
    user: User;
    isLogged: boolean;
}

const initialState: AuthState = {
    user: {} as User,
    isLogged: false
};

export const AuthReducer = createReducer(
    initialState,
    on(loginSuccess, (state, {user})=> {
        return {...state, user, isLogged: true};
    }),
    on(logOut, (state)=> {
        return {...state, user: {}, isLogged: false};
    })
);

export function reducer(state: AuthState | undefined, action: Action) {
    return AuthReducer(state, action);
}