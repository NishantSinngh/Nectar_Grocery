
import auth from '@react-native-firebase/auth'

export function login(email: string, password: string) {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => console.log(res?.user))
        .catch((error) => console.error(error))
}


export function signup(name: string, email: string, password: string) {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async res => {
            await res.user.updateProfile({ displayName: name })
            await res.user.reload()
            return auth().currentUser?.displayName
        })
        .then(name => console.log('User created with display name', name))
        .catch(error => console.error(error))
}



export async function guestLogin() {
    auth()
        .signInAnonymously()
        .then(() => {
            console.log('User signed in anonymously');
        })
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
                console.log('Enable anonymous in your firebase console.');
            }

            console.error(error);
        });
}