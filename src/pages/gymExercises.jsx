import React, { useState } from 'react';
import { GymExerciseIA } from '../helpers/configIa'
import { Form, Button, Card, Spinner } from 'react-bootstrap';
import '../styles/exercises.css';

export const GymExercise = () => {

  const [ejercicios, setEjercicios] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  async function presion(e) {
    e.preventDefault();
    setIsLoading(true);

    const mensaje = {
      sexo: e.target.sexo.value,
      edad: e.target.edad.value,
      altura: e.target.altura.value,
      peso: e.target.peso.value,
      nivel: e.target.nivel.value,
      dias: e.target.dias.value,
      aparatos: e.target.aparatos.value,
    }
    await setEjercicios(GymExerciseIA(mensaje));
    setIsLoading(false);
  }

  return (
    <>
      <div id='principalContainer'>
        <Form onSubmit={presion} id="principalForm">
          <Form.Label>Ejercicios de gimnasia</Form.Label>
          <hr />
          <Form.Group className="mb-3" controlId="sexo">
            <Form.Label>Sexo</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el sexo..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="edad">
            <Form.Label>Edad</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su edad aquí..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="altura">
            <Form.Label>Altura</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su altura aquí..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="peso">
            <Form.Label>Peso</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su peso aquí..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nivel">
            <Form.Label>Nivel de entrenamiento</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nivel de entrenamiento aquí..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dias">
            <Form.Label>Días por semana para entrenar</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la cantidad de días por semana a entrenar aquí..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="aparatos">
            <Form.Label>Con/Sin Aparatos</Form.Label>
            <Form.Control type="text" placeholder="Ingrese si tiene o no aparatos para realizar ejercicios aquí..." />
          </Form.Group>
         {/*  <Form.Group className="mb-3" controlId="cantidad">
            <Form.Label>Cantidad de ejercicios</Form.Label>
            <Form.Control type="number" min={0} max={100} placeholder="Ingrese la cantidad aquí..." />
            <p>La cantidad máxima de ejercicios a pedir en una solicitud es de: 100</p>
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Dame Ejercicios Iá!
          </Button>
        </Form>
        <Card id='principalRespuesta'>
          <Card.Body>
            <Card.Title>Ejercicios</Card.Title>
            {isLoading ? (
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Generando los ejercicios...!!!!
              </Button>
            ) : (
              <Card.Text>
                {ejercicios}
              </Card.Text>
            )
            }
          </Card.Body>
        </Card>
      </div>
    </>
  )
};