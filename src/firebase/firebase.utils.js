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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef


}

firebase.initializeApp(config)


export const AddCollectionAndDocuments = async (collectionKey, ObjectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log("collectionRef", collectionRef)

  const batch = firestore.batch()
  ObjectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
    console.log(newDocRef)
  })

  return await batch.commit()

}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id, title, items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase