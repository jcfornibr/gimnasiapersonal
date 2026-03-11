import { NavLink } from "react-router-dom";

export const FooterComponent = () => {
    return (
        <footer className="bg-[#121113] py-20 px-6 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                       
                        <h2 className="text-white text-xl font-bold leading-tight tracking-tight">Entrename <span className="text-red-500 text-sm uppercase tracking-widest">IÁ</span></h2>
                    </div>

                    <div className="space-y-3">
                        
                        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                            Recuerda siempre revisar los enunciados de los ejercicios, ya que los mismos son generados por IA y pueden contener errores.
                        </p>
                        <p className="text-white/80 max-w-md text-sm leading-relaxed font-semibold">
                            Muchas gracias por usar Entrename IÁ!
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Si querés colaborar con el desarrollo y ampliación del proyecto:
                        </p>
                        <a 
                            href='https://cafecito.app/jcforni' 
                            rel='noopener' 
                            target='_blank'
                            className='inline-block transition-transform hover:scale-105 w-fit'
                        >
                            <img 
                                srcSet='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' 
                                src='https://cdn.cafecito.app/imgs/buttons/button_1.png' 
                                alt='Invitame un café en cafecito.app'
                                className='w-40 h-auto'
                            />
                        </a>
                    </div>
                </div>

                {/* Column 1 */}
                <div>
                    <h5 className="text-white/80 font-bold mb-6">Proyecto</h5>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/">Inicio</NavLink></li>
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/gymexercise">Ejercicios</NavLink></li>
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/nosotros">Nosotros</NavLink></li>
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/contacto">Contacto</NavLink></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h5 className="text-white/80 font-bold mb-6">Información</h5>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/nosotros">Sobre Nosotros</NavLink></li>
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/contacto">Contacto</NavLink></li>
                        <li><a className="hover:text-red-500 transition-colors" href="https://cafecito.app/jcforni" target="_blank" rel="noopener">Apoyar</a></li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    
                    <p className="text-white/80 text-xs mt-2">
                        © 2026 Entrename IÁ. Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-white/80 text-sm">
                    <p className="text-center md:text-right">
                        Desarrollado por <a href="#" className='text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-600 hover:underline transition-colors font-semibold'>GCoding IT</a>
                    </p>
                </div>
            </div>

        </footer>
    )
}
