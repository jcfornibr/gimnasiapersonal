export const FooterComponent = () => {
    return (
        <footer className='bg-[#121113] text-white py-8 md:py-12'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <section className='text-center space-y-4 pb-8 border-b border-gray-700'>
                    <p className='text-sm md:text-base leading-relaxed'>
                        Los enunciados los podés copiar y pegar en cualquier tipo de documento (Word, Google Document, etc.), en próximas actualizaciones, se podrán generar los documentos Word o PDF.
                    </p>
                    <p className='text-sm md:text-base leading-relaxed'>
                        Recuerda siempre revisar los enunciados de los ejercicios, ya que los mismos son generador por IA y pueden contener errores.
                    </p>
                    <p className='text-sm md:text-base leading-relaxed font-semibold'>
                        Muchas gracias por usar Exercitame Iá!
                    </p>
                    <div className='flex flex-col items-center gap-3 pt-4'>
                        <p className='text-sm md:text-base leading-relaxed'>
                            También, si querés colaborar con el desarrollo y ampliación del proyecto, te dejo para que me invites un cafecito:
                        </p>
                        <a 
                            href='https://cafecito.app/jcforni' 
                            rel='noopener' 
                            target='_blank'
                            className='inline-block transition-transform hover:scale-105'
                        >
                            <img 
                                srcSet='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' 
                                src='https://cdn.cafecito.app/imgs/buttons/button_1.png' 
                                alt='Invitame un café en cafecito.app'
                                className='w-40 sm:w-44 md:w-48 h-auto'
                            />
                        </a>
                    </div>
                </section>
                <section className='text-center space-y-2 pt-8'>
                    <p className='text-sm md:text-base'>
                        Exercitame Iá! - Un proyecto hecho con pasión por la educación
                    </p>
                    <p className='text-sm md:text-base'>
                        Derechos reservados - 2025
                    </p>
                    <p className='text-sm md:text-base'>
                        Desarrollado por <a href="" className='text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-600 hover:underline transition-colors'>GCoding IT</a>
                    </p>
                </section>
            </div>
        </footer>
    )
}
