import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyDuwQpcgrnFurYWRbl0aLqTpSPRGZrH5iM",
  authDomain: "crowndb-47cdc.firebaseapp.com",
  databaseURL: "https://crowndb-47cdc.firebaseio.com",
  projectId: "crowndb-47cdc",
  storageBucket: "crowndb-47cdc.appspot.com",
  messagingSenderId: "373387401853",
  appId: "1:373387401853:web:81057d1fd74ec68cac2f14",
  measurementId: "G-G0RSZJ0ZV4"
};

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = () =>  auth.signInWithPopup(provider)

export default firebase