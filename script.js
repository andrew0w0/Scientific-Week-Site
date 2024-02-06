// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPw6e5AHY5LqQavX-87msQabKTFX-mHcs",
  authDomain: "scientific-week.firebaseapp.com",
  projectId: "scientific-week",
  storageBucket: "scientific-week.appspot.com",
  messagingSenderId: "222879210997",
  appId: "1:222879210997:web:ff670eebb1f7628c2794bc",
  measurementId: "G-WZV0HEYPCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const button = document.getElementById("generate-button")

console.log(button)

button.addEventListener("click", (MouseEvent) => {
  window.location.href = "./src/pages/input/input.html"
})