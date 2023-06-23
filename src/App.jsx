import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Astros from './Components/Astros/Astros'; 
import Apod from './Components/APOD/Apod'; 
import NavBar from './Components/NavBar/NavBar'; 
import Main from './Components/Main/Main'; 
import './App.css'


//constante de login
const isLogged = true; 
//Guardamos en localStorage

const userData = {
  name: 'Hector',
  age: '29'
}


//const links= ['astros', 'apod', true]; 

const links= [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]

// NavBar ------

//Main --- ruta: /
//Astros --- ruta: /astros
// APOD: --- ruta/apod


function App() {

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
    }, [isLogged]);

  return (
    <>
      <NavBar 
        links={links} 
        isLogged={JSON.parse(localStorage.login)}
      />

      <Routes>
          <Route
            path='/' 
            element={<Main {...userData} />} 
         />
          <Route
            path='/astros' 
            element={<Astros/>} 
          />
          <Route 
            path='/apod'
            element={<Apod/>}
          />
      </Routes>
      </>
    )
  }

export default App


// ## EJERCICIO
//CREAR APOD
//LINK HACIA APOD

//Imagen a link '/'
// Tiempo limite viernes 5.30