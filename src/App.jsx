import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/header.css';
import './App.css';
import { HomePage } from './pages/homePage';
import { ErrorPage } from './pages/errorPage';
import { NavigateApp } from './components/NavigateApp';
import { Nosotros } from './pages/nosotros';
import { Contact } from './pages/contact';
import { FooterComponent } from './components/FooterComponent';
import { GymExercise } from './pages/gymExercises';


function App() {

  return (
    <BrowserRouter>
      <NavigateApp/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/gymexercise' element={<GymExercise/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
