import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import { MdArrowForward, MdLightbulbOutline, MdPerson, MdCheckCircle, MdBolt } from 'react-icons/md';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
      publicKey: EMAILJS_PUBLIC_KEY,
    })
      .then(
        () => {
          alert('Email enviado con éxito!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error al enviar el email. Por favor intenta de nuevo.');
        },
      );
  };

  return (
    <div className='mainContainer'>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 text-gray-100">
            Ponte en <span className="text-red-700">Contacto</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Estamos aquí para ayudarte, nuestro equipo de soporte está disponible para resolver cualquier duda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section className="bg-red-700/5 border border-red-700/10 p-8 rounded-lg shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-400">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required
                    placeholder="Ej. Juan Pérez" 
                    className="w-full bg-[#230f0f] border border-red-700/30 rounded px-4 py-3 focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none text-white placeholder:text-gray-500" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-400">
                    Correo Electrónico
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required
                    placeholder="nombre@ejemplo.com" 
                    className="w-full bg-[#230f0f] border border-red-700/30 rounded px-4 py-3 focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none text-white placeholder:text-gray-500" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Asunto
                </label>
                <select 
                  name="subject" 
                  id="subject"
                  className="w-full bg-[#230f0f] border border-red-700/30 rounded px-4 py-3 focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none text-white appearance-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="support">Soporte Técnico</option>
                  <option value="personal-training">Entrenamiento Personalizado</option>
                  <option value="nutrition">Nutrición y Dietas</option>
                  <option value="other">Otros</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Mensaje
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  required
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?" 
                  className="w-full bg-[#230f0f] border border-red-700/30 rounded px-4 py-3 focus:ring-1 focus:ring-red-700 focus:border-red-700 outline-none text-white placeholder:text-gray-500 resize-none" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-700 hover:bg-red-800 text-white font-black py-4 rounded uppercase tracking-widest transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Enviar Mensaje
                <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </section>

          {/* Features Section */}
          <section className="flex flex-col gap-6">
            <div className="mb-2">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-100 mb-2">
                ¿Por qué elegirnos?
              </h3>
              <p className="text-sm text-gray-400">
                Características que nos hacen únicos
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {/* IA Avanzada */}
              <div className="bg-red-700/5 border border-red-700/10 p-6 rounded-lg hover:bg-red-700/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MdLightbulbOutline className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-gray-100 mb-1">
                      Tecnología IA Avanzada
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Algoritmos inteligentes que analizan tus objetivos y crean rutinas optimizadas para ti
                    </p>
                  </div>
                </div>
              </div>

              {/* Personalizado */}
              <div className="bg-red-700/5 border border-red-700/10 p-6 rounded-lg hover:bg-red-700/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MdPerson className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-gray-100 mb-1">
                      100% Personalizado
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Planes adaptados a tu nivel, objetivos y disponibilidad de tiempo
                    </p>
                  </div>
                </div>
              </div>

              {/* Sin Compromiso */}
              <div className="bg-red-700/5 border border-red-700/10 p-6 rounded-lg hover:bg-red-700/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MdCheckCircle className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-gray-100 mb-1">
                      Sin Compromiso
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Flexibilidad total para que entrenes a tu ritmo, sin ataduras ni permanencias
                    </p>
                  </div>
                </div>
              </div>

              {/* Gratis */}
              
            </div>

            {/* Response Time Card */}
            <div className="bg-linear-to-br from-red-700/10 to-red-900/5 border border-red-700/20 p-6 rounded-lg mt-2">
              <div className="flex items-center gap-3 mb-3">
                <MdBolt className="w-5 h-5 text-red-700" />
                <h4 className="font-bold uppercase tracking-wide text-gray-100 text-sm">
                  Respuesta Rápida
                </h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Respondemos tu mensaje en un plazo máximo de <span className="text-red-700 font-bold">24 horas</span>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};