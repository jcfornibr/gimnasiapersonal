import '../styles/nosotros.css';
import Logo from '../assets/logo2.jpg';

export const Nosotros = () => {
  return (
    <div className='mainContainer'>
      <section className='textContainer bg-onix p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto'>
        <img className="rounded-3xl w-40 h-40 mx-auto mb-8 shadow-lg" src={Logo} alt="Logo EntrenameIA!" />
        
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-white'>
          Tu mejor versión empieza ahora
        </h1>

        <div className='space-y-6 text-gray-200 text-lg leading-relaxed'>
          <p>
            No somos solo una app. Somos ese impulso que te levanta cuando pensás en rendirte. 
            Somos el <span className='text-white font-semibold'>"vamos una más"</span> cuando tu cuerpo duda. 
            Somos el aliado que te acompaña en cada paso, cada repetición, cada logro.
          </p>

          <p>
            En <span className='text-white font-semibold'>EntrenameIA!</span>, combinamos tecnología de punta con pasión por el movimiento. 
            Nuestra inteligencia artificial no solo te guía: te conoce, se adapta a vos y te reta a superarte. 
            Porque creemos que el verdadero cambio empieza cuando te comprometés con vos mismo.
          </p>

          <p>
            No importa si estás empezando o si ya vivís el fitness como estilo de vida. 
            Acá vas a encontrar rutinas personalizadas, seguimiento inteligente y motivación constante. 
            Porque entrenar no es solo físico: es <span className='text-white font-semibold'>mental, emocional y personal</span>.
          </p>

          <p>
            Somos jóvenes, somos rebeldes, somos determinados. Y estamos acá para demostrarte que 
            con las herramientas correctas, vos podés lograr lo que te propongas.
          </p>

          <p className='text-center text-xl font-semibold text-white pt-4'>
            Esto no es magia. Es ciencia, constancia y actitud.
          </p>
        </div>

        <div className='mt-10 pt-6 border-t border-gray-700 text-center'>
          <p className='text-2xl font-bold text-white'>
            Bienvenido a <span className='text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-600'>EntrenameIA!</span>
          </p>
        </div>
      </section>
    </div>
  )
}
