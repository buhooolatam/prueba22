import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIKpp9EW11UoToULFv-85KpYzKVhhzP_s",
  authDomain: "realstate-e4a1d.firebaseapp.com",
  projectId: "realstate-e4a1d",
  storageBucket: "realstate-e4a1d.firebasestorage.app",
  messagingSenderId: "776520761319",
  appId: "1:776520761319:web:6328a5d6d879aaf2ae8742",
  measurementId: "G-KTQD8LZ4C9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("[FIREBASE] Firebase inicializado:", app.options.projectId); // ✅ Log clave
export { db, collection, addDoc };
