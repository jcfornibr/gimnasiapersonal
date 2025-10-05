import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

/* IDIOMAS */
export async function GymExerciseIA(mensaje) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Necesito que te pongas en el papel de un profesor de educación física y personal trainer experimentado y me generes una rutina de entrenamiento para una persona de ${mensaje.sexo}, de ${mensaje.edad}, de ${mensaje.altura}, de ${mensaje.peso}. La rutina de entrenamiento es para una persona de nivel ${mensaje.nivel}, para realizar ${mensaje.dias} y ${mensaje.aparatos} aparatos`,
    });
    const respuesta = response.text;
    return respuesta;
};

