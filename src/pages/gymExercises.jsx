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
      <div className='mainContainer'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto'>
          {/* Formulario - Izquierda */}
          <div className='bg-onix p-8 md:p-10 rounded-lg shadow-xl'>
            <h1 className='text-2xl md:text-3xl font-bold text-center mb-4 text-white'>
              Rutina de ejercicios físicos
            </h1>
            <p className='text-center text-gray-200 mb-6'>Datos del/la alumno/a</p>
            
            <form onSubmit={presion} className='space-y-4'>
              <div>
                <label htmlFor="nombreAlumno" className="block text-sm font-medium mb-2 text-white">Nombre y Apellido</label>
                <input type="text" id="nombreAlumno" placeholder="Ingrese el nombre y apellido del alumno..." className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label htmlFor="sexo" className="block text-sm font-medium mb-2 text-white">Sexo</label>
                <select id="sexo" aria-label="Default select example" className='w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all'>
                  <option>Seleccione el sexo:</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>
              <div>
                <label htmlFor="edad" className="block text-sm font-medium mb-2 text-white">Edad</label>
                <input type="number" id="edad" placeholder="Ingrese su edad aquí..." min={12} max={99} className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label htmlFor="altura" className="block text-sm font-medium mb-2 text-white">Altura (cm)</label>
                <input type="number" id="altura" placeholder="Ingrese su altura aquí..." min={0} className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label htmlFor="peso" className="block text-sm font-medium mb-2 text-white">Peso (kg)</label>
                <input type="number" id="peso" placeholder="Ingrese su peso aquí..." min={0} className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label htmlFor="nivel" className="block text-sm font-medium mb-2 text-white">Nivel de entrenamiento</label>
                <select id="nivel" aria-label="Default select example" className='w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all'>
                  <option>Seleccione el nivel:</option>
                  <option value="novato">Novato</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>
              <div>
                <label htmlFor="dias" className="block text-sm font-medium mb-2 text-white">Días por semana para entrenar</label>
                <input type="number" id="dias" placeholder="Ingrese la cantidad de días por semana a entrenar aquí..." min={1} max={7} className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label htmlFor="aparatos" className="block text-sm font-medium mb-2 text-white">Con/Sin Aparatos</label>
                <select id="aparatos" aria-label="Default select example" className='w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all'>
                  <option>Seleccione Con o Sin aparatos:</option>
                  <option value="con">Con</option>
                  <option value="sin">Sin</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:shadow-xl focus:outline-none transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                Dame Ejercicios Iá!
              </button>
            </form>
          </div>

          {/* Resultados - Derecha */}
          <div className="bg-onix p-8 md:p-10 rounded-lg shadow-xl flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Ejercicios</h2>
            <div className="overflow-y-auto max-h-screen pr-3 custom-scrollbar">
              {isLoading ? (
                <div className="flex justify-center items-center gap-3 text-white">
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" role="status" aria-hidden="true"></span>
                  <span className="text-lg">Generando los ejercicios...!!!!</span>
                </div>
              ) : ejercicios ? (
                <div className="markdown-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{ejercicios}</ReactMarkdown>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-center">
                  <p>Completa el formulario y genera tu rutina personalizada</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};