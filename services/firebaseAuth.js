// Import the functions you need from the SDKs you need
import { initializeApp, getApps} from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOCjIsp5r17dWbkXS-IOBP9rdNajwBxTc",
  authDomain: "basicappfb.firebaseapp.com",
  projectId: "basicappfb",
  storageBucket: "basicappfb.firebasestorage.app",
  messagingSenderId: "140568306730",
  appId: "1:140568306730:web:cb4e64c5540c3717f88f53"
};

let auth;
let app;
if(getApps().length === 0){
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app,{persistence: getReactNativePersistence(AsyncStorage)});
}
else{
    app = getApps()[0];
    auth = getAuth(app);
}
export {auth};
