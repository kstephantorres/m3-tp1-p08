import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Titulo from './Components/Titulo';
import { Container } from 'react-bootstrap';
import Formulario from './Components/Formulario';

function App() {
  return (
    <Container>
      <main className="my-5">
        <Titulo></Titulo>
        <Formulario></Formulario>
      </main>
    </Container>
  )
}

export default App
