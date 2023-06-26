import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './screens/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Abertura from './screens/Abertura'
import Registro from './screens/Registro'
import Login from './screens/Login';

export default function Rotas() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Abertura />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registro' element={<Registro />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


