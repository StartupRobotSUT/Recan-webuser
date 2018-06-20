import firebase from 'firebase'
var config = {
 
  };
  export const app = firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const firebaseAuth = firebase.auth()
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()