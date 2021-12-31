// const firebase = require("firebase-admin");
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBYt0iGvlsSDG75eWeqkP4Wc4q5e0JiKq8",

//   authDomain: "annapoorna2-48cd9.firebaseapp.com",

//   projectId: "annapoorna2-48cd9",

//   storageBucket: "annapoorna2-48cd9.appspot.com",

//   messagingSenderId: "672094775030",

//   appId: "1:672094775030:web:c044bdbb89efc8c8e8aed7",

//   measurementId: "G-3D4BR00SGZ",

// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// //const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
// // const analytics = getAnalytics(app);
// module.exports = {database :db,auth :auth}


var admin = require("firebase-admin");

var serviceAccount = require("../javascripts/annapoorna2-48cd9-firebase-adminsdk-m6h8s-20487bf62f.json");

var firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = firebaseApp.firestore();
module.exports = {database :db}