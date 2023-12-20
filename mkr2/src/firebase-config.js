// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';






// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGLZrW5-cyPXGeZlOtp9eUsgV5tG13hZE",
  authDomain: "mkr2-f55c5.firebaseapp.com",
  projectId: "mkr2-f55c5",
  storageBucket: "mkr2-f55c5.appspot.com",
  messagingSenderId: "1035396362910",
  appId: "1:1035396362910:web:7008756f1582274c9d418f",
  measurementId: "G-0MML9LL368"
};
const app = initializeApp(firebaseConfig)
export const firebaseDB = getFirestore(app);
export default app;
// Initialize Firebase
//export default initializeApp(firebaseConfig);
