
import './App.css';
import { useState } from 'react';
//instalar axios npm install axios
import Axios from 'axios';

function App() {
  const [primerNombre, setprimerNombre] = useState("");
  const [segundoNombre, setsegundoNombre] = useState("");
  const [primerApellido, setprimerApellido] = useState("");
  const [segundoApellido, setsegundoApellido] = useState("");
  const [telefono, settelefono] = useState(0);
  //const [direccion, setdireccion] = useState("");
 const [email, setemail] = useState("");

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      primer_nombre:primerNombre,
      segundo_nombre:segundoNombre,
      primer_apellido:primerApellido,
      segundo_apellido:segundoApellido,
      telefono:telefono,
     // direccion:direccion
     email:email
    }).then(()=>{
      alert("Persona Registrado");
    });
  }
  return (
    <div className="App">
   {/*Aqui va la pagina web o el login */}
      <div className='datosPersona'>
        <h1>Formulario de Personas</h1>
        <label>Primer nombre: <input onChange={(event)=>{setprimerNombre(event.target.value);}} type='text'></input></label><br/>
        <label>Segundo nombre: <input  onChange={(event)=>{setsegundoNombre(event.target.value);}} type="text"></input></label><br/>
        <label>Primer apellido: <input  onChange={(event)=>{setprimerApellido(event.target.value);}} type="text"></input></label><br/>
        <label>Segundo apellido: <input  onChange={(event)=>{setsegundoApellido(event.target.value);}} type="text"></input></label><br/>
        <label>Telefono: <input  onChange={(event)=>{settelefono(event.target.value);}} type="number"></input></label><br/>
        <label>Email: <input  onChange={(event)=>{setemail(event.target.value);}} type='email'></input></label><br/>
        <button onClick={add}>Registrar persona</button>
      </div>
    </div>
  );
}

export default App;
