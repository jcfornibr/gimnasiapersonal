import React from 'react'
import {Button, Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import entrenamiento from '../assets/entrenamiento.jpg';
import '../styles/home.css'

export const HomePage = () => {
  return (
    <div className='mainContainer'>
      <Card id='cardGym'>
        <Card.Img variant="top" src={entrenamiento} />
        <Card.Body>
          <Card.Title>Personal Trainer</Card.Title>
          <Card.Text>
            Obten ejercicios para realizar donde te sientas cómo.
            Recuerda que debes seguir las instrucciones de la mejor manera.
            ¡Y siempre, consulta con un profesor en persona!
          </Card.Text>
          <NavLink to='/gymexercise'><Button variant="success" id='btnCardGym'>Entrene IA!</Button></NavLink>
        </Card.Body>
      </Card>
    </div>
  )
}
