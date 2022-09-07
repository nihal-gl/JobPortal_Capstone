import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC6AvEBkQXfFFankHWA_3uJitOe_miCydc",
    authDomain: "gl-job-app.firebaseapp.com",
    projectId: "gl-job-app",
    storageBucket: "gl-job-app.appspot.com",
    messagingSenderId: "670750833078",
    appId: "1:670750833078:web:0a68ad8e6724235f4ce917"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export {projectFirestore}