import React, { useState } from 'react';
import { GymExerciseIA } from '../helpers/configIa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Form, Button, Card, Spinner } from 'react-bootstrap';
import '../styles/exercises.css';

export const GymExercise = () => {

  const [ejercicios, setEjercicios] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  async function presion(e) {
    e.preventDefault();
    setIsLoading(true);

    const mensaje = {
      nombreAlumno: e.target.nombreAlumno.value,
      sexo: e.target.sexo.value,
      edad: e.target.edad.value,
      altura: e.target.altura.value,
      peso: e.target.peso.value,
      nivel: e.target.nivel.value,
      dias: e.target.dias.value,
      aparatos: e.target.aparatos.value,
    }

    const result = await GymExerciseIA(mensaje);
    setEjercicios(result);

    setIsLoading(false);
  }

  return (
    <>
      <div id='principalContainer'>
        <Form onSubmit={presion} id="principalForm">
          <Form.Label>Rutina de ejercicios físicos</Form.Label>
          <Form.Label>Datos del/la alumno/a</Form.Label>
          <hr />
          <div id='inputsContainer'>
            <Form.Group className="mb-3" controlId="nombreAlumno">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el nombre y apellido del alumno..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sexo">
              <Form.Label>Sexo</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleccione el sexo:</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="edad">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" placeholder="Ingrese su edad aquí..." min={12} max={99} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="altura">
              <Form.Label>Altura (cm)</Form.Label>
              <Form.Control type="number" placeholder="Ingrese su altura aquí..." min={0} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="peso">
              <Form.Label>Peso (kg)</Form.Label>
              <Form.Control type="number" placeholder="Ingrese su peso aquí..." min={0} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nivel">
              <Form.Label>Nivel de entrenamiento</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleccione el nivel:</option>
                <option value="novato">Novato</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="dias">
              <Form.Label>Días por semana para entrenar</Form.Label>
              <Form.Control type="number" placeholder="Ingrese la cantidad de días por semana a entrenar aquí..." min={1} max={7} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="aparatos">
              <Form.Label>Con/Sin Aparatos</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleccione Con o Sin aparatos:</option>
                <option value="con">Con</option>
                <option value="sin">Sin</option>
              </Form.Select>
            </Form.Group>
          </div>
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
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{ejercicios}</ReactMarkdown>
              </Card.Text>
            )
            }
          </Card.Body>
        </Card>
      </div>
    </>
  )
};