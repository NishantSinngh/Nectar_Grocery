import { getApp } from "@react-native-firebase/app";
import { login, logout, signup } from "../../helperFunctions/auth";
import { APP_LOG } from "../../helperFunctions/utils";
import { saveUserData } from "../reducers/auth";
import store from "../store";
import auth, { reload, updateProfile } from '@react-native-firebase/auth'
import { showToast } from "../../components/Toast";
import STRINGS from "../../constants/STRINGS";


const { dispatch } = store

export async function onSaveUserData(data: Auth) {
    dispatch(saveUserData(data));
}

export async function userLogin(email: string, password: string) {
    try {


        APP_LOG('calling => login');

        const res = await login(email, password)

        await onSaveUserData({
            displayName: res.user?.displayName ?? null,
            email: res.user?.email ?? null,
            uid: res.user?.uid ?? null
        })

        showToast(STRINGS.SIGNIN_SUCCESSFUL)

    } catch (error: any) {
        console.log({ error });

        if (error.message.includes('auth/invalid-credential')) {
            showToast(STRINGS.INCORRECT_CREDENTIALS);
        } else if (error.message.includes('auth/too-many-requests')) {
            showToast(STRINGS.MANY_REQUEST);
        } else if (error.message.includes('auth/invalid-email')) {
            showToast(STRINGS.EMAIL_INVALID)
        }
    } finally {

    }

}

export async function userSignUp(name: string, email: string, password: string) {
    try {
        APP_LOG('calling => signup');

        const res = await signup(email, password);

        APP_LOG(res);

        await updateProfile(res.user, { displayName: name });
        await reload(res.user);

        await onSaveUserData({
            displayName: auth().currentUser?.displayName ?? null,
            email: auth()?.currentUser?.email ?? null,
            uid: auth().currentUser?.uid ?? null
        })

        showToast(STRINGS.SIGNIN_SUCCESSFUL)

    } catch (error: any) {
        console.log({ error });

        if (error?.message?.includes('auth/invalid-email')) {
            showToast('Invalid email');
        } else if (error?.message?.includes('auth/email-already-in-use')) {
            showToast('Email already in use')
        } else {
            showToast('Something went wrong')
        }
    } finally {
        // showToast(STRINGS.SIGNIN_SUCCESSFUL)
    }
}

export async function userLogout() {
    logout()
        .then(() => {
            onSaveUserData({
                displayName: null,
                email: null,
                uid: null
            })
            showToast(STRINGS.LOGOUT_SUCCESSFUL)
        })
}