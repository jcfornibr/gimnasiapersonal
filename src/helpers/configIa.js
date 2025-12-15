import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

/* EJERCICIOS FÍSICOS PERSONALIZADOS */
export async function GymExerciseIA(mensaje) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            { 
                role: 'user', 
                parts: [
                    { 
                        text: `Necesito que te pongas en el papel de un profesor de educación física y persona trainer experimentado, y me generes una rutina de entrenamiento para ${mensaje.nombreAlumno}, de sexo ${mensaje.sexo}, de ${mensaje.edad} años de edad, de ${mensaje.altura} cm de altura y de ${mensaje.peso} kg de peso. La rutina de entrenamiento es para una persona de nivel ${mensaje.nivel}, para realizar ${mensaje.dias} días por semana y ${mensaje.aparatos} aparatos` 
                    }
                ] 
            }
        ],
    });
    const respuesta = response.text;

    return respuesta;
};

