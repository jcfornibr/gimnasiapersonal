import { NavLink } from "react-router-dom";
import entrenamiento from "../assets/entrenamiento.jpg";
import dumbbell from "../assets/dumbbell.webp";
import "../styles/home.css";

export const HomePage = () => {
  return (
    <>
      <main>
        <section class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
          <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-red-900/20 blur-[120px] z-0"></div>
          <div class="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-red-600/10 blur-[150px] z-0"></div>

          <div class="absolute inset-0 w-full h-full z-0">
            <img
              src={dumbbell}
              alt="dumbbell"
              className="w-full h-full  object-contain mx-auto opacity-65"
            />
          </div>

          <div class="relative z-10 text-center px-4">
            <h1 class="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
              Rewrite{" "}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                your limits
              </span>
            </h1>
            <p class="mt-4 text-gray-400 text-lg max-w-md mx-auto">
              Entrenamiento con IA para elevar tu máximo potencial.
            </p>
            <NavLink
              to="/gymexercise"
              className="inline-flex w-1/4 justify-center items-center text-gray-200 bg-red-700 hover:bg-red-800 shadow-lg hover:shadow-xl font-bold leading-5 rounded-lg text-base px-6 py-3.5 focus:outline-none transition-all duration-200 transform "
            >
              Entrene IA!
            </NavLink>
          </div>
        </section>

        {/* <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]  mb-12">
        

          
          <div className="absolute inset-0 w-full h-full">
            <img
              src={dumbbell}
              alt="dumbbell"
              className=" object-cover"
              priority
            />
          </div>

       
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-winered mb-4 md:mb-6">
              Personal Trainer
            </h1>
            <h2 className="text-sm md:text-base  lg:text-lg text-white mb-6 md:mb-8 max-w-2xl">
              Recordá que debés seguir las instrucciones de la mejor manera para{" "}
              <span className="text-white font-semibold">
                resultados óptimos
              </span>
              .
            </h2>
            <NavLink
              to="/gymexercise"
              className="inline-flex w-1/4 justify-center items-center text-gray-200 bg-red-700 hover:bg-red-800 shadow-lg hover:shadow-xl font-bold leading-5 rounded-lg text-base px-6 py-3.5 focus:outline-none transition-all duration-200 transform "
            >
              Entrene IA!
            </NavLink>
          </div>
        </section> */}

        {/* <div className="bg-onix block max-w-md p-8 md:p-10 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
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
      </div> */}
      </main>
    </>
  );
};
