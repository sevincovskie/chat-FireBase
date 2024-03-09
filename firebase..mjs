  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAcTHaumB_18xMp6RzMggae9n3_xOCzlIw",
    authDomain: "chat-ad6c6.firebaseapp.com",
    projectId: "chat-ad6c6",
    storageBucket: "chat-ad6c6.appspot.com",
    messagingSenderId: "135266501574",
    appId: "1:135266501574:web:23c7d090181be73892e8c7"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  const db= getDatabase(app);

  export default db;