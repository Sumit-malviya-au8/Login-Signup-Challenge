import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAqS1TwAqPICTIerVJ5EaCwjqGsj-3Lsq0",
    authDomain: "login-signup-2a586.firebaseapp.com",
    projectId: "login-signup-2a586",
    storageBucket: "login-signup-2a586.appspot.com",
    messagingSenderId: "563407348439",
    appId: "1:563407348439:web:b75ecca71ebea70a248692",
    measurementId: "G-BHXCXVGYBE"
  };


  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;

 