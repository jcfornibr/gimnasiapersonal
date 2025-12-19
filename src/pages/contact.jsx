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
      <form ref={form} onSubmit={sendEmail} className='formContacto'>
        <div className="mb-3 formGroup">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Ingrese su nombre..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-3 formGroup">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input type="email" name="email" id="email" placeholder="Ingrese su email..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-3 formGroup">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
          <textarea rows={3} name="message" id="message" placeholder="Ingrese su mensaje o consulta..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Enviar</button>
      </form>
    </div>
  );
};