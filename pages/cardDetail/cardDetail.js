// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
const db = getFirestore();

let perent = document.getElementById("perent")

let id= localStorage.getItem("carId")
console.log(id);

const referance = doc(db, "products",`${id}`)
const docSnap = await getDoc(referance);

let obj = {
    productName:docSnap.data().productName,
    productDescription:docSnap.data().productDescription,
    productPrice:docSnap.data().productPrice,
    imageUrl:docSnap.data().imageUrl,
    productCategory:docSnap.data().productCategory,
}
 
perent.innerHTML = "";


perent.innerHTML += `<!-- Product Image -->
        <div class="lg:w-1/2 p-4">
          <img
            class="w-full h-full object-cover"
            src="${obj.imageUrl}"
            alt="Product Image"
          />
        </div>
        <!-- Product Details -->
        <div class="lg:w-1/2 p-4">
          <h1 class="text-3xl font-bold mb-2">${obj.productName}</h1>
          <p class="text-xl text-gray-700 mb-4">${obj.productPrice}</p>
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae.
          </p>
          <div class="mb-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Category</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Tag1</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Tag2</span
            >
          </div>
          <div class="flex items-center">
            <input
              type="number"
              min="1"
              value="1"
              class="w-16 p-2 border rounded-md mr-4"
            />
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!-- Additional Information -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-4">
        <h2 class="text-2xl font-bold mb-4">Product Description</h2>
        <p class="text-gray-600 mb-4">
        ${obj.productDescription}
        </p>
        <h2 class="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div class="space-y-4">
          <div class="border-b pb-4">
            <p class="text-gray-600">
              <strong>John Doe</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam viverra euismod odio, gravida
              pellentesque urna varius vitae.
            </p>
            <div class="flex items-center mt-2">
              <span class="text-yellow-500 mr-1">★★★★★</span>
              <span class="text-gray-500">5/5</span>
            </div>
          </div>
          <div class="border-b pb-4">
            <p class="text-gray-600">
              <strong>Jane Smith</strong> - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam viverra euismod odio, gravida
              pellentesque urna varius vitae.
            </p>
            <div class="flex items-center mt-2">
              <span class="text-yellow-500 mr-1">★★★★☆</span>
              <span class="text-gray-500">4/5</span>
            </div>
          </div>
        </div>`



