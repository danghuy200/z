import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";l
const firebaseConfig = {
  apiKey: "AIzaSyBYB-Hi36ak9adThdwEVFTseESGaeaG4ic",
  authDomain: "quan-edb95.firebaseapp.com",
  projectId: "quan-edb95",
  storageBucket: "quan-edb95.appspot.com",
  messagingSenderId: "158587922742",
  appId: "1:158587922742:web:d70fc97d9807ff39806b97",
  measurementId: "G-5WJQKHD7E1"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);