import { NavLink } from "react-router-dom";

export const FooterComponent = () => {
    return (
        <footer className="bg-[#121113] py-20 px-6 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
                            Entrename <span className="text-red-500 text-sm uppercase tracking-widest">IÁ</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                            Tu entrenador personal impulsado por inteligencia artificial. Rutinas personalizadas, 
                            seguimiento continuo y consejos adaptados a tus objetivos.
                        </p>
                        <div className="flex items-start gap-2 bg-red-700/5 border border-red-700/20 p-4 rounded-lg max-w-md">
                            <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                <span className="text-white/90 font-semibold">Importante:</span> Las rutinas son generadas por IA. 
                                Verifica siempre que los ejercicios se adapten a tu condición física.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            ¿Te gusta el proyecto? Ayúdanos a seguir mejorando:
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

                {/* Navigation */}
                <div>
                    <h5 className="text-white/80 font-bold mb-6 uppercase tracking-wider text-sm">Navegación</h5>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/">Inicio</NavLink></li>
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/gymexercise">Coach IA</NavLink></li>
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/nosotros">Nosotros</NavLink></li>
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/contacto">Contacto</NavLink></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h5 className="text-white/80 font-bold mb-6 uppercase tracking-wider text-sm">Recursos</h5>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li>
                            <a className="hover:text-red-500 transition-colors flex items-center gap-2" href="https://cafecito.app/jcforni" target="_blank" rel="noopener">
                                Apoyar Proyecto
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </li>
                        <li><NavLink className="hover:text-red-500 transition-colors" to="/nosotros">Sobre el Proyecto</NavLink></li>
                        <li>
                            <span className="text-gray-500 cursor-not-allowed">Términos de Uso</span>
                        </li>
                        <li>
                            <span className="text-gray-500 cursor-not-allowed">Privacidad</span>
                        </li>
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
