import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBNghXyhb3E7fOHSyYVgNyF_T544DQvgZA",
    authDomain: "slack-clone-react-2d336.firebaseapp.com",
    projectId: "slack-clone-react-2d336",
    storageBucket: "slack-clone-react-2d336.appspot.com",
    messagingSenderId: "622379045733",
    appId: "1:622379045733:web:5c6db44ff10c5ea9ffc78c"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };