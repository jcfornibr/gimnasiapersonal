
import { NavLink } from 'react-router-dom';
import entrenamiento from '../assets/entrenamiento.jpg';
import '../styles/home.css'

export const HomePage = () => {
  return (
    <>
    <div className='mainContainer'>
      <div id='cardGym' className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={entrenamiento} alt="Entrenamiento" className="w-full h-auto" />
        <div className="p-6">
          <h5 className="text-xl font-bold mb-3">Personal Trainer</h5>
          <p className="text-gray-700 mb-4">
            Obten ejercicios para realizar donde te sientas cómo.
            Recuerda que debes seguir las instrucciones de la mejor manera.
            ¡Y siempre, consulta con un profesor en persona!
          </p>
          <NavLink to='/gymexercise'>
            <button id='btnCardGym' className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Entrene IA!
            </button>
          </NavLink>
        </div>
      </div>
    </div>
    

    </>
  )
}
