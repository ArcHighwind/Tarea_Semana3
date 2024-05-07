import React from 'react'
import { useState } from 'react'

export const App = () => {

  const [name, setName] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function submitHandler(event){
    event.preventDefault();
  }

  function nameHandler(event){
    event.preventDefault();
    const message = document.getElementById("greeting");
    var name = document.getElementById("name");
    var display = document.createElement("p");
    display.innerText = "Bienvenido " +name+ ", es un placer!"; 
    
    message.appendChild(display);
    
  }

  
  
  function SumHandler(event) {
    event.preventDefault();
    const resultado = document.getElementById("sumayresta");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var sum = num1+num2;
    var result = document.createElement("p");
    result.innerText = sum; 

    resultado.appendChild(result);


  }

  function SubHandler(event) {
    event.preventDefault();
    const resultado = document.getElementById("sumayresta");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var substract = num1-num2;
    var result = document.createElement("p");
    result.innerText = "Resultado: " +substract ; 

    resultado.appendChild(result);
  }

  return (
    <>
      <div>
        <form name='form_name'>
          <label htmlFor ="name">Ingrese su nombre: </label>
          <input type="text" id='name'></input>
          <button type='submit' onClick={nameHandler}>Ingresar</button>
        </form>
        <br></br>
        <div id='greeting'>

        </div>
        <form name="form_sum" onSubmit= {submitHandler(event)}>
          <label htmlFor ="num1">Ingrese el primer numero: </label>
          <input type="number" id="num1"></input>
          <label htmlFor ="num2">Ingrese el segundo numero: </label>
          <input type="number" id="num2"></input>
          <button type='submit' onClick={SumHandler}>Sumar</button>
          <button type='submit' onClick={SubHandler}>Restar</button>
        </form>
        <div id="sumayresta">
            
        </div>
      </div>
    </>
  )
}

