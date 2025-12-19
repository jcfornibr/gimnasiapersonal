import React, { useState } from 'react';
import { GymExerciseIA } from '../helpers/configIa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/exercises.css';

export const GymExercise = () => {

  const [ejercicios, setEjercicios] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  async function presion(e) {
    e.preventDefault();
    setIsLoading(true);

    const mensaje = {
      nombreAlumno: e.target.nombreAlumno.value,
      sexo: e.target.sexo.value,
      edad: e.target.edad.value,
      altura: e.target.altura.value,
      peso: e.target.peso.value,
      nivel: e.target.nivel.value,
      dias: e.target.dias.value,
      aparatos: e.target.aparatos.value,
    }

    const result = await GymExerciseIA(mensaje);
    setEjercicios(result);

    setIsLoading(false);
  }

  return (
    <>
      <div id='principalContainer'>
        <form onSubmit={presion} id="principalForm">
          <label className="block text-lg font-bold mb-2">Rutina de ejercicios físicos</label><br/>
          <label className="block text-md font-semibold mb-2">Datos del/la alumno/a</label>
          <hr />
          <div id='inputsContainer'>
            <div className="mb-3">
              <label htmlFor="nombreAlumno" className="block text-sm font-medium mb-2">Nombre y Apellido</label>
              <input type="text" id="nombreAlumno" placeholder="Ingrese el nombre y apellido del alumno..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="sexo" className="block text-sm font-medium mb-2">Sexo</label>
              <select id="sexo" aria-label="Default select example" className='selectsRutina w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option>Seleccione el sexo:</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="edad" className="block text-sm font-medium mb-2">Edad</label>
              <input type="number" id="edad" placeholder="Ingrese su edad aquí..." min={12} max={99} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="altura" className="block text-sm font-medium mb-2">Altura (cm)</label>
              <input type="number" id="altura" placeholder="Ingrese su altura aquí..." min={0} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="peso" className="block text-sm font-medium mb-2">Peso (kg)</label>
              <input type="number" id="peso" placeholder="Ingrese su peso aquí..." min={0} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="nivel" className="block text-sm font-medium mb-2">Nivel de entrenamiento</label>
              <select id="nivel" aria-label="Default select example" className='selectsRutina w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option>Seleccione el nivel:</option>
                <option value="novato">Novato</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="dias" className="block text-sm font-medium mb-2">Días por semana para entrenar</label>
              <input type="number" id="dias" placeholder="Ingrese la cantidad de días por semana a entrenar aquí..." min={1} max={7} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="aparatos" className="block text-sm font-medium mb-2">Con/Sin Aparatos</label>
              <select id="aparatos" aria-label="Default select example" className='selectsRutina w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option>Seleccione Con o Sin aparatos:</option>
                <option value="con">Con</option>
                <option value="sin">Sin</option>
              </select>
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
            Dame Ejercicios Iá!
          </button>
        </form>
        <div id='principalRespuesta' className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-bold mb-3">Ejercicios</h5>
            {isLoading ? (
              <button disabled className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 opacity-50 cursor-not-allowed">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" role="status" aria-hidden="true"></span>
                Generando los ejercicios...!!!!
              </button>
            ) : (
              <div className="text-gray-700">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{ejercicios}</ReactMarkdown>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </>
  )
};