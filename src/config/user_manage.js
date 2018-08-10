import {firebaseAuth } from './firebase'
export function authEmail(email,pass) {
   return firebaseAuth.createUserWithEmailAndPassword(email, pass)
}
export function  singInEmail(email,pass) {
	return firebaseAuth.signInWithEmailAndPassword(email,pass)
}
export function  signOut() {
	return firebaseAuth.signOut()
}
export function resetPassword(email){
	return firebaseAuth.sendPasswordResetEmail(email)
}