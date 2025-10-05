import React from 'react';
import '../styles/footer.css';

export const FooterComponent = () => {
    return (
        <div id='footerContainer'>
            <section id='recomendacionesContainer'>
                <p>Los enunciados los podés copiar y pegar en cualquier tipo de documento (Word, Google Document, etc.), en próximas actualizaciones, se podrán generar los documentos Word o PDF. </p>
                <p>Recuerda siempre revisar los enunciados de los ejercicios, ya que los mismos son generador por IA y pueden contener errores.</p>
                <p>Muchas gracias por usar Exercitame Iá!</p>
                <p>También, si querés colaborar con el desarrollo y ampliación del proyecto, te dejo para que me invites un cafecito: <a href='https://cafecito.app/jcforni' rel='noopener' target='_blank'><img srcSet='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_1.png' alt='Invitame un café en cafecito.app' /></a></p>
            </section>
            <section id='legalContainer'>
                <p>Exercitame Iá! - Un proyecto hecho con pasión por la educación</p>
                <p>Derechos reservados - 2025</p>
                <p>Desarrollado por <a href="">GCoding IT</a></p>
            </section>
        </div>
    )
}
