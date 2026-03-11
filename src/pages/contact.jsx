import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css'

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
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </section>

          {/* Information Section */}
          <section className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-bold uppercase tracking-wider">Ubicación</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
    
                  Proximamente...
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-bold uppercase tracking-wider">Contacto Directo</h3>
                </div>
                <div className="text-gray-400 space-y-1">
                  <p className="flex items-center gap-2">
                    <span className="text-xs font-bold text-red-700/60 uppercase">Soporte:</span>
                    proximamente...
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-xs font-bold text-red-700/60 uppercase">Info:</span>
                    proximamente...
                  </p>
                </div>
              </div>
            </div>

            {/* Horarios Section */}
            <div className="bg-red-700/5 border border-red-700/10 p-6 rounded-lg">
              <div className="flex items-center gap-3 text-red-700 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold uppercase tracking-wider">Horarios de Atención</h3>
              </div>
              <div className="text-gray-400 space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="font-semibold">Lunes - Viernes:</span>
                  <span>6:00 AM - 10:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Sábado:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Domingo:</span>
                  <span>8:00 AM - 2:00 PM</span>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-gray-400 text-sm">Síguenos en Redes</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded border border-red-700/20 hover:bg-red-700/20 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded border border-red-700/20 hover:bg-red-700/20 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded border border-red-700/20 hover:bg-red-700/20 transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};