import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfm0KB_V9ojUmwyspJ6eSwkjNztDzdOeI",
  authDomain: "lanchester-rd.firebaseapp.com",
  projectId: "lanchester-rd",
  storageBucket: "lanchester-rd.firebasestorage.app",
  messagingSenderId: "99050204591",
  appId: "1:99050204591:web:bc68d1f7812351eed7535a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
