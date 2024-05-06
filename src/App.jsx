import React from 'react'
import { useState } from 'react'

export const App = () => {

  function submitHandler(event){
    event.preventDefault();
  }

  function nameHandler(event){
    var name = document.getElementById("name");
    var display = document.createElement("p");
    display.innerText = "Bienvenido " +name+ ", es un placer!"; 
    
  }
  
  function SumHandler(val) {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var sum = num1+num2;
    var result = document.createElement("p");
    result.innerText = "Resultado: " +sum ; 
  }

  function SubHandler(val) {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var substract = num1-num2;
    var result = document.createElement("p");
    result.innerText = "Resultado: " +substract ; 
  }

  return (
    <>
      <div>
        <form name='form_name' onsubmit="submitHandler(event)">
          <label for ="name">Ingrese su nombre: </label>
          <input type="text" id='name'></input>
          <button type='submit' onClick={nameHandler}>Ingresar</button>
        </form>
        <form name="form_sum" onsubmit="submitHandler(event)">
          <label for ="num1">Ingrese el primer numero: </label>
          <input type="number" id="num1"></input>
          <label for ="num2">Ingrese el segundo numero: </label>
          <input type="number" id="num2"></input>
          <button type='submit' onClick={SumHandler}>Sumar</button>
          <button type='submit' onClick={SubHandler}>Restar</button>
        </form>
      </div>
    </>
  )
}

