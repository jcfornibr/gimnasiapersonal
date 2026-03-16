import React, { useState } from 'react';
import { GymExerciseIA } from '../helpers/configIa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/exercises.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocumentPDF } from '../components/pdf';

export const GymExercise = () => {

  const [ejercicios, setEjercicios] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [sexo, setSexo] = useState('');
  const [nivel, setNivel] = useState('');
  const [aparatos, setAparatos] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [deporte, setDeporte] = useState('');

  async function presion(e) {
    e.preventDefault();
    setIsLoading(true);

    const mensaje = {
      nombreAlumno: e.target.nombreAlumno.value,
      sexo: sexo,
      edad: e.target.edad.value,
      altura: e.target.altura.value,
      peso: e.target.peso.value,
      nivel: nivel,
      dias: e.target.dias.value,
      aparatos: aparatos,
      objetivo: objetivo,
      deporte: deporte,
      duracion: e.target.duracion.value,
    }

    setFormData(mensaje);
    const result = await GymExerciseIA(mensaje);
    setEjercicios(result);

    setIsLoading(false);
  }

  return (
    <>
      <main className="flex-1 bg-black min-h-screen py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto w-full">
          {/* Formulario - Izquierda */}
          <section className="w-full md:w-5/12 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-100">
                Crea Tu <span className="text-red-600">Rutina.</span>
              </h1>
              <p className="text-gray-400 text-base">
                Ingresa tus métricas y objetivos para generar un plan de entrenamiento de precisión con IA.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-xl border border-red-600/10 shadow-2xl">
              <form onSubmit={presion} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombreAlumno" className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    id="nombreAlumno" 
                    placeholder="ej. Alex Johnson" 
                    className="w-full rounded bg-zinc-800 border border-red-600/20 text-gray-100 focus:ring-red-600 focus:border-red-600 h-12 px-4 placeholder:text-gray-500"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="peso" className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                      Peso (kg)
                    </label>
                    <input 
                      type="number" 
                      id="peso" 
                      placeholder="75" 
                      min={0}
                      className="w-full rounded bg-zinc-800 border border-red-600/20 text-gray-100 focus:ring-red-600 focus:border-red-600 h-12 px-4 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="altura" className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                      Altura (cm)
                    </label>
                    <input 
                      type="number" 
                      id="altura" 
                      placeholder="180" 
                      min={0}
                      className="w-full rounded bg-zinc-800 border border-red-600/20 text-gray-100 focus:ring-red-600 focus:border-red-600 h-12 px-4 placeholder:text-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="edad" className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                      Edad
                    </label>
                    <input 
                      type="number" 
                      id="edad" 
                      placeholder="25" 
                      min={12} 
                      max={99}
                      className="w-full rounded bg-zinc-800 border border-red-600/20 text-gray-100 focus:ring-red-600 focus:border-red-600 h-12 px-4 placeholder:text-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Sexo
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      type="button"
                      onClick={() => setSexo('hombre')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        sexo === 'hombre' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">male</span> 
                      Hombre
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSexo('mujer')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        sexo === 'mujer' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">female</span> 
                      Mujer
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Nivel de Entrenamiento
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button 
                      type="button"
                      onClick={() => setNivel('novato')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        nivel === 'novato' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">emoji_events</span> 
                      Principiante
                    </button>
                    <button 
                      type="button"
                      onClick={() => setNivel('intermedio')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        nivel === 'intermedio' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">bolt</span> 
                      Intermedio
                    </button>
                    <button 
                      type="button"
                      onClick={() => setNivel('avanzado')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        nivel === 'avanzado' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">workspace_premium</span> 
                      Avanzado
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="dias" className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Días por Semana
                  </label>
                  <input 
                    type="number" 
                    id="dias" 
                    placeholder="Ej. 4" 
                    min={1} 
                    max={7}
                    className="w-full rounded bg-zinc-800 border border-red-600/20 text-gray-100 focus:ring-red-600 focus:border-red-600 h-12 px-4 placeholder:text-gray-500"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="duracion" className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Duración de la rutina
                  </label>
                  <input 
                    type="number" 
                    id="duracion" 
                    placeholder="Ej. 45" 
                    className="w-full rounded bg-zinc-800 border border-red-600/20 text-gray-100 focus:ring-red-600 focus:border-red-600 h-12 px-4 placeholder:text-gray-500"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Tipo de Entrenamiento
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      type="button"
                      onClick={() => setAparatos('con')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        aparatos === 'con' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">fitness_center</span> 
                      Con Aparatos
                    </button>
                    <button 
                      type="button"
                      onClick={() => setAparatos('sin')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        aparatos === 'sin' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">self_improvement</span> 
                      Sin Aparatos
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Objetivo Principal
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      type="button"
                      onClick={() => setObjetivo('Hipertrofia')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        objetivo === 'Hipertrofia' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">fitness_center</span> 
                      Hipertrofia
                    </button>
                    <button 
                      type="button"
                      onClick={() => setObjetivo('Fuerza')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        objetivo === 'Fuerza' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">bolt</span> 
                      Fuerza
                    </button>
                    <button 
                      type="button"
                      onClick={() => setObjetivo('Resistencia')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        objetivo === 'Resistencia' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">directions_run</span> 
                      Resistencia
                    </button>
                    <button 
                      type="button"
                      onClick={() => setObjetivo('Pérdida de Grasa')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        objetivo === 'Pérdida de Grasa' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">monitor_weight</span> 
                      Pérdida de Grasa
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                    Deporte que practica
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      type="button"
                      onClick={() => setDeporte('Fútbol')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        deporte === 'Fútbol' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">fitness_center</span> 
                      Fútbol
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDeporte('Basquet')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        deporte === 'Basquet' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">bolt</span> 
                      Basquet
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDeporte('Voley')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        deporte === 'Voley' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">directions_run</span> 
                      Voley
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDeporte('Ningún')}
                      className={`py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        deporte === 'Ningún' 
                          ? 'border border-red-600 bg-red-600/10 text-gray-100' 
                          : 'border border-red-600/20 bg-zinc-800 text-gray-400 hover:border-red-600/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">monitor_weight</span> 
                      Ninguno
                    </button>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading || !sexo || !nivel || !aparatos || !objetivo}
                  className="mt-4 w-full bg-red-700 hover:bg-red-800 text-white font-black py-4 rounded-lg flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-red-700/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? 'GENERANDO...' : 'GENERAR ENTRENAMIENTO'}
                  <span className="material-symbols-outlined">auto_awesome</span>
                </button>
              </form>
            </div>
          </section>

          {/* Resultados - Derecha */}
          <section className="w-full md:w-7/12 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-red-600">analytics</span> 
                Resultado Generado por IA
              </h3>
              {ejercicios && !isLoading && (
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-red-600/20 text-red-600 rounded-full text-xs font-bold uppercase">
                    Listo
                  </span>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 rounded-xl border border-red-600/20 overflow-hidden flex flex-col shadow-2xl min-h-150">
              {/* Workout Header Info */}
              {ejercicios && !isLoading && (
                <div className="p-6 border-b border-red-600/10 bg-linear-to-r from-zinc-900 to-zinc-800">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-100">
                        Plan Personalizado - {formData.nombreAlumno}
                      </h4>
                      <p className="text-red-600 text-sm font-medium mt-1">
                        Objetivo: {formData.objetivo}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs uppercase font-bold">Nivel</p>
                      <p className="text-gray-100 font-bold capitalize">{formData.nivel}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Exercise List */}
              <div className="flex-1 p-6 flex flex-col gap-4 custom-scrollbar overflow-y-auto max-h-125">
                {isLoading ? (
                  <div className="flex flex-col justify-center items-center gap-4 text-white h-full">
                    
                    <span className="inline-block w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" role="status" aria-hidden="true"></span>
                    <span className="text-lg font-semibold">Generando tu rutina personalizada...</span>
                  </div>
                ) : ejercicios ? (
                  <>
                    <div className="markdown-content">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{ejercicios}</ReactMarkdown>
                    </div>
                    
                    <div className="bg-red-600/5 p-4 rounded-lg border border-dashed border-red-600/30 text-center mt-4">
                      <p className="text-red-600 text-sm italic">
                        "No te detengas cuando estés cansado. Detente cuando hayas terminado."
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400 text-center gap-4">
                    <span className="material-symbols-outlined text-6xl text-gray-600">
                      pending_actions
                    </span>
                    <p className="text-lg">Completa el formulario y genera tu rutina personalizada</p>
                  </div>
                )}
              </div>

              {/* Action Footer */}
              {ejercicios && !isLoading && (
                <div className="p-6 border-t border-red-600/10 bg-zinc-900 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex gap-2">
                    
                  </div>
                  <PDFDownloadLink document={<MyDocumentPDF rutina={ejercicios}/>} fileName='rutina_ejercicios.pdf'>
                    {({ loading }) => loading ? 
                      <button className="w-full sm:w-auto bg-zinc-800 text-gray-400 font-bold py-3 px-8 rounded flex items-center justify-center gap-2 transition-all cursor-wait">
                        <span className="material-symbols-outlined animate-spin">sync</span> 
                        Preparando PDF...
                      </button> : 
                      <button className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-700/10 cursor-pointer">
                        <span className="material-symbols-outlined">picture_as_pdf</span> 
                        Descargar Rutina como PDF
                      </button>
                    }
                  </PDFDownloadLink>
                </div>
              )}
            </div>

            {/* Small Info Cards */}
            {ejercicios && !isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-800 p-4 rounded border border-red-600/5 flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-600">calendar_month</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Frecuencia</p>
                    <p className="text-gray-100 font-bold">{formData.dias} días/semana</p>
                  </div>
                </div>
                <div className="bg-zinc-800 p-4 rounded border border-red-600/5 flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-600">fitness_center</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Equipamiento</p>
                    <p className="text-gray-100 font-bold capitalize">{formData.aparatos} Aparatos</p>
                  </div>
                </div>
                <div className="bg-zinc-800 p-4 rounded border border-red-600/5 flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-600">trending_up</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Nivel</p>
                    <p className="text-gray-100 font-bold capitalize">{formData.nivel}</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  )
};