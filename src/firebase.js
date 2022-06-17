import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIJq7ckihkX_9q5_deriTS385ulHkcXk4",
  authDomain: "linkedin-clone-24ff2.firebaseapp.com",
  projectId: "linkedin-clone-24ff2",
  storageBucket: "linkedin-clone-24ff2.appspot.com",
  messagingSenderId: "831550645827",
  appId: "1:831550645827:web:83e10b98b47ed4c38256f6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
