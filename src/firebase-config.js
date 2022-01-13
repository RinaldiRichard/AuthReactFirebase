import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB5Yo32_Fa5JHqaEybueQukWmvFI1mx2OM",
  authDomain: "auth-react-f8b06.firebaseapp.com",
  projectId: "auth-react-f8b06",
  storageBucket: "auth-react-f8b06.appspot.com",
  messagingSenderId: "457142456695",
  appId: "1:457142456695:web:ce4619d094e094ad049172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)