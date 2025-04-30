
import auth from '@react-native-firebase/auth'

export async function login(email: string, password: string) {
    return new Promise((resolve, reject) => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}


export async function signup(email: string, password: string) {
    return new Promise((resolve, reject) => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => resolve(res))
            .catch(error => reject(error))
    })

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