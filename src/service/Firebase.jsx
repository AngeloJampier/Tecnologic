import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDy0B3HvTboWUg-CBaUtbcOwxom-eQQsV8",
  authDomain: "coder-react-dced3.firebaseapp.com",
  projectId: "coder-react-dced3",
  storageBucket: "coder-react-dced3.appspot.com",
  messagingSenderId: "178152328865",
  appId: "1:178152328865:web:10fd3dff65c679abdc2ae0"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
