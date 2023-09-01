/* 
const MiPrimerComponente = (props) => {

    console.log(props)
  return (
    <div>{props.curso}</div>
  )
}

export default MiPrimerComponente */

/* DESESTRUCTURAMOS EL PROPS PARA ACCEDER A CURSO */

const NavBar = ({curso, usuario, greeting, tomarValor}) => {

  tomarValor(36)
  
return (
  <>
    <div>{curso}</div>
    <h1>{greeting}</h1>
    <h2>{usuario ? "Estás logueado" : "Debes registrarte"}</h2>
  
  </>

)
}

export default MiPrimerComponente