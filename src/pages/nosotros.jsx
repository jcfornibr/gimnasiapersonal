import '../styles/nosotros.css';

export const Nosotros = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-black">
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full max-w-300 px-6 py-12 md:py-24">
          <div className="relative overflow-hidden rounded-xl bg-black border  min-h-100 flex flex-col justify-end p-8 md:p-16">
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{
                backgroundImage: 'linear-gradient(to top, #230f0f, transparent), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070")'
              }}
            ></div>
            <div className="relative z-10 max-w-2xl">
              <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                EL FUTURO DEL FITNESS
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6">
                Tu mejor versión empieza ahora
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                No somos solo una app. Somos ese impulso que te levanta cuando pensás en rendirte. 
                Somos el <span className='text-white font-semibold'>"vamos una más"</span> cuando tu cuerpo duda.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Grid */}
        <section className="w-full max-w-300 px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6 p-8 rounded-xl bg-red-500/5 border border-red-500/10">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Entrenamientos Personalizados</h3>
                <p className="text-gray-400 leading-relaxed">
                  Rutinas diseñadas específicamente para tu nivel, objetivos y disponibilidad. 
                  En <span className='text-white font-semibold'>EntrenameIA!</span>, combinamos tecnología de punta con pasión por el movimiento.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8 rounded-xl bg-red-500/5 border border-red-500/10">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Inteligencia Adaptativa</h3>
                <p className="text-gray-400 leading-relaxed">
                  Nuestra inteligencia artificial no solo te guía: te conoce, se adapta a vos y te reta a superarte. 
                  Porque creemos que el verdadero cambio empieza cuando te comprometés con vos mismo.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8 rounded-xl bg-red-500/5 border border-red-500/10">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Resultados Garantizados</h3>
                <p className="text-gray-400 leading-relaxed">
                  No importa si estás empezando o si ya vivís el fitness como estilo de vida. 
                  Porque entrenar no es solo físico: es <span className='text-white font-semibold'>mental, emocional y personal</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Content Section */}
        <section className="w-full max-w-300 px-6 py-16 md:py-32">
          <div className="flex flex-col justify-center max-w-3xl mx-auto">
            <h2 className="text-white text-4xl font-black mb-6">
              Construyamos tu Mejor Versión Juntos.
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Somos jóvenes, somos rebeldes, somos determinados. Y estamos acá para demostrarte que 
              con las herramientas correctas, vos podés lograr lo que te propongas.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded bg-red-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Progreso Constante</h4>
                  <p className="text-gray-400">
                    Acá vas a encontrar rutinas personalizadas, seguimiento inteligente y motivación constante. 
                    Cada día es una oportunidad para mejorar.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded bg-red-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Tecnología y Pasión</h4>
                  <p className="text-gray-400">
                    Combinamos lo mejor de la ciencia del entrenamiento con algoritmos inteligentes 
                    que se adaptan a tu ritmo y objetivos únicos.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded bg-red-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Compromiso Real</h4>
                  <p className="text-gray-400">
                    Esto no es magia. Es ciencia, constancia y actitud. Es el compromiso que hacés con vos mismo 
                    para alcanzar tus metas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 text-center">
              <p className="text-2xl font-bold text-white mb-2">
                Bienvenido a <span className="text-red-500">EntrenameIÁ!</span>
              </p>
              <p className="text-gray-400 text-sm">
                La revolución del fitness está en tus manos.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
