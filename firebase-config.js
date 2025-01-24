import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAcfpyy--xTN8oIKZjRXsSSaYpt7cxW1uA",
    authDomain: "registroinmuebles-7a3c5.firebaseapp.com",
    projectId: "registroinmuebles-7a3cS",
    storageBucket: "registroinmuebles-7a3c5.firebasestorage.app",
    messagingSenderId: "89425397982",
    appId: "1:89425397982:web:58ed261b6335330c84da4f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("[FIREBASE] Firebase inicializado:", app.options.projectId); // ✅ Log clave
export { db, collection, addDoc };
