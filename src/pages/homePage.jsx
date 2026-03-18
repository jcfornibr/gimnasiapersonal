import { NavLink } from "react-router-dom";
import HeroImg from "../assets/hero-gym.jpg";
import "../styles/home.css";
import { 
  MdArrowForward, 
  MdLightbulbOutline, 
  MdBarChart, 
  MdPictureAsPdf, 
  MdBolt, 
  MdTrendingUp, 
  MdCheckCircle, 
  MdSettings,
  MdFitnessCenter 
} from "react-icons/md";

export const HomePage = () => {
  return (
    <>
      <main className="flex-1 bg-black">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                IA Aplicada al Fitness
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-gray-100">
                Esculpe tu Mejor Versión con{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">
                  Inteligencia Artificial
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed">
                Entrena con rutinas personalizadas generadas por IA, adaptadas a tu nivel, objetivos y progreso para maximizar tus resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <NavLink
                  to="/gymexercise"
                  className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold h-14 px-10 rounded-lg text-lg transition-all shadow-lg shadow-red-700/20"
                >
                  Inicia tu Transformación
                  <MdArrowForward className="w-5 h-5" />
                </NavLink>
                
                
              </div>
              
              <p className="text-gray-500 text-xs mt-6">
                Desarrollado por{" "}
                <a 
                  href="https://nomossolutions.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 font-semibold hover:text-red-500 transition-colors"
                >
                  Nomos Solutions
                </a>
              </p>
              
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-red-500/50 to-red-900/50 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-square lg:aspect-video rounded-xl overflow-hidden bg-dark-onix  ">
                <img
                  src={HeroImg}
                  alt="Entrenamiento con pesas"
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <p className="text-red-500 text-xs font-bold uppercase tracking-widest">Tu Momento</p>
                      <h3 className="text-xl font-bold text-white">El Cambio Empieza Hoy</h3>
                      <p className="text-gray-400 text-sm">Transforma tu cuerpo con tecnología</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-mono text-2xl font-bold">0</p>
                      <p className="text-gray-500 text-[10px] uppercase">Excusas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-20 bg-dark-onix" id="features">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white">
                  Ingeniería aplicada al{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">
                    Fitness
                  </span>
                </h2>
                <p className="text-gray-400 max-w-xl text-lg">
                  Libera tu verdadero potencial con nuestra herramienta diseñada para atletas serios que exigen resultados basados en datos.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-xl bg-black/50 border border-white/5 hover:border-red-500/50 transition-all">
                <div className="w-14 h-14 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <MdLightbulbOutline className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Personalización por IA</h3>
                <p className="text-gray-400 leading-relaxed">
                  Entrename IÁ analiza tu información, niveles de fuerza y equipo disponible para construir la división adaptativa perfecta.
                </p>
              </div>
              
              <div className="group p-8 rounded-xl bg-black/50 border border-white/5 hover:border-red-500/50 transition-all relative">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-wide">
                  Próximamente
                </div>
                <div className="w-14 h-14 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <MdBarChart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Seguimiento de Progreso</h3>
                <p className="text-gray-400 leading-relaxed">
                  Visualiza tu volumen, intensidad y crecimiento muscular con métricas avanzadas y gráficos de rendimiento que se actualizan en tiempo real.
                </p>
              </div>
              
              <div className="group p-8 rounded-xl bg-black/50 border border-white/5 hover:border-red-500/50 transition-all">
                <div className="w-14 h-14 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <MdPictureAsPdf className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Exportaciones PDF</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lleva tu rutina fuera de línea con guías PDF profesionales formateadas, que incluyen ejercicios y hojas de registro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 px-6 lg:px-20 border-t border-white/5" id="how-it-works">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-4xl font-black text-white">
                Cómo funciona la{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">
                  IA
                </span>
              </h2>
              <p className="text-gray-400 text-lg">De puntos de datos a ganancias masivas en tres simples pasos.</p>
            </div>
            
            <div className="relative space-y-12">
              <div className="absolute left-6 top-8 bottom-8 w-px bg-linear-to-b from-red-500 via-red-500/50 to-transparent md:left-1/2"></div>
              
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="pl-16 md:pl-0 md:text-right">
                  <h4 className="text-2xl font-bold text-white mb-2">Ingresa tus Datos</h4>
                  <p className="text-gray-400">
                    Completa tu perfil con información sobre tu nivel de experiencia, objetivos y equipo disponible.
                  </p>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-red-700 border-4 border-black text-white font-bold z-10">
                  1
                </div>
                <div className="hidden md:block"></div>
              </div>
              
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="hidden md:block"></div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-red-700 border-4 border-black text-white font-bold z-10">
                  2
                </div>
                <div className="pl-16 md:pl-0">
                  <h4 className="text-2xl font-bold text-white mb-2">Síntesis por IA</h4>
                  <p className="text-gray-400">
                    La red neuronal procesa miles de puntos de datos para generar la relación volumen-frecuencia óptima específicamente para ti.
                  </p>
                </div>
              </div>
              
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="pl-16 md:pl-0 md:text-right">
                  <h4 className="text-2xl font-bold text-white mb-2">Empieza a Entrenar</h4>
                  <p className="text-gray-400">
                    Sigue el plan en tiempo real, registra tus repeticiones y observa cómo suben tus récords personales mientras la IA se adapta a tu progreso semanal.
                  </p>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-red-700 border-4 border-black text-white font-bold z-10">
                  3
                </div>
                <div className="hidden md:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-dark-onix to-onix p-12 lg:p-20  text-center">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MdFitnessCenter className="w-32 h-32" />
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
                ¿Listo para Desatar <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">
                  tu Potencial?
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto italic">
                "La mente es el límite. Mientras la mente pueda visualizar el hecho de que puedes hacer algo, puedes hacerlo."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink
                  to="/gymexercise"
                  className="bg-red-700 hover:bg-red-800 text-white font-bold h-16 px-12 rounded text-xl transition-all shadow-xl shadow-red-700/30 flex items-center justify-center"
                >
                  Iniciar Ahora
                </NavLink>
                <NavLink
                  to="/nosotros"
                  className="bg-transparent border border-white/20 hover:border-white/40 text-white font-bold h-16 px-12 rounded text-xl transition-all flex items-center justify-center"
                >
                  Conocer Más
                </NavLink>
              </div>
              
              <p className="text-gray-500 text-sm mt-8">
                Desarrollado por{" "}
                <a 
                  href="https://nomossolutions.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 font-semibold hover:text-red-500 transition-colors"
                >
                  Nomos Solutions
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
