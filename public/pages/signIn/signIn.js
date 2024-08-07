// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
// import {
//   getFirestore,
//   doc,
//   getDoc,
// } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCUg7fdWry-N5S_oLhPWk9zERVMu_THoKY",
//   authDomain: "ecommercesastabazar.firebaseapp.com",
//   projectId: "ecommercesastabazar",
//   storageBucket: "ecommercesastabazar.appspot.com",
//   messagingSenderId: "590381296522",
//   appId: "1:590381296522:web:f05caa3f25a162afc17673",
//   measurementId: "G-ZH0KK0MJQH",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();
// const db = getFirestore();

// let email = document.getElementById("email");
// let password = document.getElementById("password");

// window.logIn = () => {
//   let obj = {
//     email: email.value,
//     password: password.value,
//   };

//   signInWithEmailAndPassword(auth, obj.email, obj.password)
//     .then(async(res) => {
//      const id = res.user.uid;

//       const referance = doc(db, "users", id);
//       let snap =await getDoc(referance);
//       if (snap.exists()) {
        
//         localStorage.setItem("user", JSON.stringify(snap.data()));
//         window.location.replace("../../index.html");
//       } else {
//         console.log("data is not found!");
//       }
//     })
//     .catch((err) => {
//       alert(err.message);
//     });
// };


// =========================hackaton Practice========

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUg7fdWry-N5S_oLhPWk9zERVMu_THoKY",
  authDomain: "ecommercesastabazar.firebaseapp.com",
  projectId: "ecommercesastabazar",
  storageBucket: "ecommercesastabazar.appspot.com",
  messagingSenderId: "590381296522",
  appId: "1:590381296522:web:f05caa3f25a162afc17673",
  measurementId: "G-ZH0KK0MJQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let  auth = getAuth();
let db= getFirestore()

let email = document.getElementById("email")
let password = document.getElementById("password")

window.logIn = () => {
  let obj = {
    email: email.value,
    password: password.value,
  }
  console.log(obj);

signInWithEmailAndPassword(auth, obj.email, obj.password).then(async(res)=>{
  obj.id=res.user.uid;
  let id = obj.id;

const referance = doc(db, "users", id)
let snap =await getDoc(referance);


if (snap.exists()) {
   localStorage.setItem("user", JSON.stringify(snap.data()));
   window.location.replace("../../index.html")
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
})
.catch((err)=>{
  alert(err.message)
})
}



