import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4z3jKWJ-GI9xcTD2koMp-KRcWIM2q1h8",
  authDomain: "ms-bajrang-safe-kota.firebaseapp.com",
  projectId: "ms-bajrang-safe-kota",
  storageBucket: "ms-bajrang-safe-kota.appspot.com",
  messagingSenderId: "920021869218",
  appId: "1:920021869218:web:7fa29106036a2f16052dfb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
export const imageDb = getStorage(app);
