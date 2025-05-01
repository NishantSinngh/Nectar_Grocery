import { getApp } from '@react-native-firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  validatePassword,
  signOut,
} from '@react-native-firebase/auth';

const auth = getAuth(getApp());

export async function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signup(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function passwordValidation(password: string) {
  return validatePassword(auth, password);
}
export async function logout() {
  return signOut(auth)
}

export async function guestLogin() {
  try {
    await signInAnonymously(auth);
    console.log('User signed in anonymously');
  } catch (error: any) {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }
    console.error(error);
  }
}
