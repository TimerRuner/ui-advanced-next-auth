import {AuthActionConst, AuthActionTypes, IAuthState, IUser} from "../types/auth.type";

export const initialState: IAuthState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
}

export const authReducer = (state: IAuthState = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case AuthActionConst.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionConst.SET_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionConst.SET_USER:
            return {...state, user: action.payload}
        default: return state
    }
}