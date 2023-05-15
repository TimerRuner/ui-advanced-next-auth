export interface IUser {
    id: string
    email: string
    isActivate: boolean
}

export interface IAuthState {
    user: IUser
    isAuth: boolean
    isLoading: boolean
}

export enum AuthActionConst {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_LOADING = "SET_LOADING"
}

export interface AuthSetAuth {
    type: AuthActionConst.SET_AUTH,
    payload: boolean
}

export interface AuthSetUser {
    type: AuthActionConst.SET_USER,
    payload: IUser
}

export interface AuthSetLoading {
    type: AuthActionConst.SET_LOADING,
    payload: boolean
}

export type AuthActionTypes = AuthSetAuth | AuthSetLoading | AuthSetUser