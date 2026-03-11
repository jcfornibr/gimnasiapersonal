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
          /* console.log('SUCCESS!'); */
          alert('Email enviado con éxito!');
          form.current.reset(); // Optional: Clear form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again.');
        },
      );
  };

  return (
    <div className='mainContainer'>
      <div className='bg-onix p-8 md:p-12 rounded-lg shadow-xl w-full max-w-6xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-white'>
          Contactanos
        </h1>
        
        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="formGroup">
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-white">Nombre</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Ingrese su nombre..." 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" 
              />
            </div>
            
            <div className="formGroup">
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-white">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Ingrese su email..." 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" 
              />
            </div>
          </div>
          
          <div className="formGroup">
            <label htmlFor="message" className="block text-lg font-medium mb-2 text-white">Mensaje</label>
            <textarea 
              rows={5} 
              name="message" 
              id="message" 
              placeholder="Ingrese su mensaje o consulta..." 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-lg px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl focus:outline-none transition-all duration-200 transform cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};