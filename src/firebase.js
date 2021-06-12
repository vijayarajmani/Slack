import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyAXOP_5LjuLFCOtNcjvopoF7xeXAreF8hA",
     authDomain: "slack-223ad.firebaseapp.com",
     projectId: "slack-223ad",
     storageBucket: "slack-223ad.appspot.com",
     messagingSenderId: "165470522211",
     appId: "1:165470522211:web:cbeb4f785da8d72b4f6156",
     measurementId: "G-EM2D8FBP49"
   };
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export {auth, provider };
   export default db;