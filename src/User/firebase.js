// import firebase from 'firebase'
// import { fireb }
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
const firebaseConfig = {
    apiKey: "AIzaSyCbNT75ZAKhtcOoH-BipglgO4ccwh6NmwI",
    authDomain: "netflix-8c523.firebaseapp.com",
    projectId: "netflix-8c523",
    storageBucket: "netflix-8c523.appspot.com",
    messagingSenderId: "363289881464",
    appId: "1:363289881464:web:e2622dd4b13e5e0ec1b68d",
    measurementId: "G-G81KC0017Z"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig)
  // const db = firebaseApp.firestore()
  // const auth = firebase.auth()
  const fireApp= firebase.initializeApp(firebaseConfig)
  const ab =fireApp.firestore()
   export const auth = firebase.auth()



  // export {auth}
  export default  ab