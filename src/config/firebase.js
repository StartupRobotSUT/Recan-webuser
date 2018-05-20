import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBiPrj41cFLUmWIyY_7LSeP3rkGta6etEg",
    authDomain: "recan-43751.firebaseapp.com",
    databaseURL: "https://recan-43751.firebaseio.com",
    projectId: "recan-43751",
    storageBucket: "recan-43751.appspot.com",
    messagingSenderId: "867172891752"

  };
  export const app = firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const firebaseAuth = firebase.auth()
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()