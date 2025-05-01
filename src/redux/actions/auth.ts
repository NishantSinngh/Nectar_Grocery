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
    login(email, password)
        .then(async (res) => {
            await onSaveUserData({
                displayName: res.user?.displayName ?? null,
                email: res.user?.email ?? null,
                uid: res.user?.uid ?? null
            })
        })
        .catch(() => {            
            showToast(STRINGS.INCORRECT_CREDENTIALS)
        })
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

        const displayName = auth().currentUser?.displayName;
        APP_LOG('from actions user display name', displayName);

    } catch (error: any) {
        if (error?.message?.includes('auth/invalid-email')) {
            throw new Error('Email');
        } else if (error?.message?.includes('auth/email-already-in-use')) {
            throw new Error('Email already in use');
        }
    }
}

export async function userLogout() {
    logout()
        .then(() => onSaveUserData({
            displayName: null,
            email: null,
            uid: null
        }))
        .finally(() => showToast(STRINGS.LOGOUT_SUCCESSFUL))
}