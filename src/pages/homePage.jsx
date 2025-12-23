
import { NavLink } from 'react-router-dom';
import entrenamiento from '../assets/entrenamiento.jpg';
import '../styles/home.css'

export const HomePage = () => {
  return (
    <>
    <div className='mainContainer'>
      <div className="bg-onix block max-w-md p-8 md:p-10 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
        <img className="rounded-lg w-full h-auto shadow-lg mb-6" src={entrenamiento} alt="Entrenamiento" />
        
        <h5 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-white text-center">
          Personal Trainer
        </h5>
        
        <div className="mb-8 space-y-3 text-gray-200 text-lg leading-relaxed">
          <p>
            <span className="text-white font-semibold">Obtené ejercicios personalizados</span> para realizar donde te sientas cómodo.
          </p>
          <p>
            Recordá que debés seguir las instrucciones de la mejor manera para <span className="text-white font-semibold">resultados óptimos</span>.
          </p>
          <p className="text-yellow-300 font-medium">
            ¡Y siempre, consultá con un profesor en persona!
          </p>
        </div>
        
        <NavLink to='/gymexercise' className="inline-flex w-full justify-center items-center text-gray-200 bg-red-700 hover:bg-red-800 shadow-lg hover:shadow-xl font-bold leading-5 rounded-lg text-base px-6 py-3.5 focus:outline-none transition-all duration-200 transform ">
          Entrene IA!
        </NavLink>
      </div>
    </div>
    

    </>
  )
}
