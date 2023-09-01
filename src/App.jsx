/* function App() {

  const comision = "ReactJS"
  const lugar = "Coderhouse"
  const usuario = false

  return (

    <>

   <div className="mi-contenedor">
    <h1>Mi comisión de React</h1>
    <h2>Comisión 4712</h2>
    <input type="text"/>
    <a href="#"/>
    <p>Mi variable es {comision} y lo estudio en {lugar}</p>
    <p>2+2 es igual a {2+2}</p>
    <p>{
      usuario ? "Eres usuario" : "Debes registrarte"
      }</p>
    <button onClick={() => alert("Me diste click")}>Mi botón</button>
   </div>

    </>

  )
}

export default App */

import Navbar from "./components/NavBar"

/* Clase 4 Componentes */

/* rfc, react function component */

/* Las PROPS son de solo lectura, las maneja el componente padre */

const App = () => {

  /* VARIABLES */
  const curso = "ReactJs"
  const greeting = "Bienvenidos al curso de React"
   /* FUNCIONES */
  const tomarValor = (valor) => {
    alert(`El valor es: ${valor}`)
  }
  return (
   <>
    <h1>App.jsx</h1>

    <MiPrimerComponente

    curso = {curso}
    usuario= {false}
    greeting = {greeting}
    tomarValor = {tomarValor}
    
    />

   </>
  )
}

export default App

