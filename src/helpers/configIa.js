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
                        /* text: `Necesito que te pongas en el papel de un profesor de educación física y personal trainer experimentado, y me generes una rutina de entrenamiento para ${mensaje.nombreAlumno}, de sexo ${mensaje.sexo}, de ${mensaje.edad} años de edad, de ${mensaje.altura} cm de altura y de ${mensaje.peso} kg de peso. La rutina de entrenamiento es para una persona de nivel ${mensaje.nivel}, para realizar ${mensaje.dias} días por semana y ${mensaje.aparatos} aparatos, la rutina tiene que cumplir el siguiente objetivo del alumno: ${mensaje.objetivo} `  */

                        text: `Actúa como un Entrenador Personal y Especialista en Fisiología del Ejercicio con 15 años de experiencia.Tu tarea es diseñar una rutina de entrenamiento personalizada y profesional para el siguiente perfil:Alumno: ${mensaje.nombreAlumno} (${mensaje.sexo}, ${mensaje.edad} años)
                        Biometría: ${mensaje.altura} cm | ${mensaje.peso} kgNivel de experiencia: ${mensaje.nivel}
                        Disponibilidad: ${mensaje.dias} días por semana
                        Duración de cada rutina: ${mensaje.duracion} minutos por día
                        Equipamiento disponible: ${mensaje.aparatos}
                        Objetivo principal: ${mensaje.objetivo}
                        Estructura de la Respuesta:
                        Análisis breve: Una breve observación técnica sobre la relación entre el objetivo, el nivel y la frecuencia semanal.
                        Distribución Semanal: Indica qué grupos musculares se trabajarán cada día (ej. Empuje/Tracción, Full Body, etc.).La Rutina: Presenta una tabla detallada que incluya:
                        Ejercicio, Series, Repeticiones (o rango), Descanso y Notas técnicas (tips de ejecución).
                        Recomendaciones: Incluye consejos sobre progresión de cargas, calentamiento y vuelta a la calma.
                        Restricciones importantes:
                        Ajusta la selección de ejercicios estrictamente al nivel ${mensaje.nivel} para evitar lesiones. 
                        Prioriza el uso de ${mensaje.aparatos} mencionados, pero sugiere alternativas si es necesario para la biomecánica correcta.
                        Ten cuenta que el alumno realiza el siguiente deporte ${mensaje.deporte}, por lo que tenlo en cuenta para mejorar la rutina de entrenamiento.
                        Además, prioriza la creación de la rutina si el alumno tiene ${mensaje.lesion}.
                        Usa un tono motivador pero profesional.`
                    }
                ] 
            }
        ],
    });
    const respuesta = response.text;

    return respuesta;
};

