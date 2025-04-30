import { login, signup } from "../../helperFunctions/auth";
import { saveUserData } from "../reducers/auth";
import store from "../store";
import auth from '@react-native-firebase/auth'


const { dispatch } = store

export async function onSaveUserData(data: Auth) {
    dispatch(saveUserData(data));
}


export async function userLogin(email: string, password: string) {
    login(email, password)
        .then((res) => console.log('from actions', (res as LoginResult)?.user?.displayName))
        .catch((error) => console.error(error))
}

export async function userSignUp(name: string, email: string, password: string) {
    signup(email, password)
        .then(async (res: any) => {
            await res?.user?.updateProfile({ displayName: name })
            await res?.user?.reload()
            return auth().currentUser?.displayName
        })
        .then(name => console.log('from actions user display name', name))
        .catch(error => console.error(error))
}


