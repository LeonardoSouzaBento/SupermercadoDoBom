import ReactDOM from "react-dom/client";
import RootComponent from "./RootComponent";
import '../src/index.css';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChgbs_mPSRjQSm8FdxGxVwZkKwotHq648",
  authDomain: "api-supermercado-do-bom.firebaseapp.com",
  projectId: "api-supermercado-do-bom",
  storageBucket: "api-supermercado-do-bom.firebasestorage.app",
  messagingSenderId: "981543642842",
  appId: "1:981543642842:web:9b8ac9f046e796d2b367e3",
  measurementId: "G-SYCDGMXT6G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById("root")).render(<RootComponent />);