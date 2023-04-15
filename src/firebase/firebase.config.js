import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVUBAEJWAelRvsgd5YjBAMDM_n3oJSGVk",
  authDomain: "fir-auth-react-c0f03.firebaseapp.com",
  projectId: "fir-auth-react-c0f03",
  storageBucket: "fir-auth-react-c0f03.appspot.com",
  messagingSenderId: "372158225374",
  appId: "1:372158225374:web:2c4dadcbad11d559895b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
