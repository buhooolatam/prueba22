import { db, collection, addDoc } from './firebase-config.js';

async function enviarTexto() {
    const texto = document.getElementById('texto').value;
    
    console.log("[APP] Iniciando envío...");
    console.log("[APP] Texto a enviar:", texto);

    if (!texto) {
        console.error("[ERROR] El texto está vacío");
        alert("¡Escribe algo primero!");
        return;
    }

    try {
        console.log("[FIRESTORE] Intentando escribir en colección 'pruebas'...");
        
        const docRef = await addDoc(collection(db, "pruebas"), {
            texto: texto,
            timestamp: new Date().toISOString()
        });

        console.log("[FIRESTORE] Documento escrito con ID:", docRef.id); // ✅ Log clave
        alert("¡Texto enviado correctamente!");
        
    } catch (error) {
        console.error("[ERROR] Fallo en Firestore:", error); // ❌ Log clave
        console.error("[ERROR] Detalles completos:", {
            code: error.code,
            message: error.message,
            stack: error.stack
        });
        alert(`Error: ${error.message}`);
    }
}

window.enviarTexto = enviarTexto; // Hacer la función global
