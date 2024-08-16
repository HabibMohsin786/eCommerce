// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getFirestore,
  doc,
  getDocs,
  collection
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
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
  measurementId: "G-ZH0KK0MJQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let btnSignUp =document.getElementById("btnSignUp")
let btnLogIn =document.getElementById("btnLogIn")
let btnLogOut =document.getElementById("btnLogOut")
let btnAddPtoduct =document.getElementById("btnAddPtoduct")
let perent = document.getElementById("perent")




let init = () =>{
let userObj =localStorage.getItem("user");
userObj = JSON.parse(userObj);

if(userObj){
    btnSignUp.style.display ="none"
    btnLogIn.style.display ="none"
    btnLogOut.className ="text-gray-800 hover:text-blue-500 px-4"
    if(userObj.userType=== "user"){
        btnAddPtoduct.style.display ="none"
    }
}
}

init()

window.logOut = () =>{
signOut(auth).then(()=>{
    localStorage.removeItem("user")
    init()
})
.catch((err)=>{
    alert(err.message)
})

}


let getdata = async ()=>{
let arr=[];

const referance = collection(db, "products");
const querySnapshot = await getDocs(referance);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let obj = {...doc.data(),id:doc.id} 
  // console.log(obj);
  arr.push(obj)
  console.log(arr);
  
  perent.innerHTML = "";
arr.forEach((data)=>{
  perent.innerHTML +=`
  <div onclick="cardDetails('${data.id}')" class="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="${data.imageUrl}"
              alt="Product 1"
              class="w-full h-64 object-cover rounded-t-lg"
            />
            <h3 class="mt-4 text-xl font-semibold text-gray-800">${data.productName}</h3>
            <p class="mt-2 text-gray-600">Rs. ${data.productPrice}</p>
            <a
              href="#"
              class="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-full"
              >Add to Cart</a
            >
          </div>
  `
  
})

  
  
});
}
getdata()


window.cardDetails=(id)=>{
  localStorage.setItem("carId", id);
  window.location.assign("/pages/cardDetail/cardDetail.html");
}



























