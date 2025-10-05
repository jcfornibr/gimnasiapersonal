import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';
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
      <Form ref={form} onSubmit={sendEmail} className='formContacto'>
        <Form.Group className="mb-3 formGroup" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" placeholder="Ingrese su nombre..." />
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="email" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email..." name="email" />
        </Form.Group>
        <Form.Group className="mb-3 formGroup" controlId="message" >
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" placeholder="Ingrese su mensaje o consulta..." />
        </Form.Group>

        <Button variant="primary" type="submit">Enviar</Button>
      </Form>
    </div>
  );
};