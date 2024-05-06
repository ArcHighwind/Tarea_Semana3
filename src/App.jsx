import React from 'react'
import { useState } from 'react'

export const App = () => {

  function submitHandler(event){
    event.preventDefault();
  }
  
  function SumHandler(val) {
    var num1;
    var num2;
    var result = num1+num2;
  }

  function SubHandler(val) {
    var num1;
    var num2;
    var result = num1-num2;
  }

  return (
    <>
      <div>
        <form name='form_name' onsubmit="submitHandler(event)">
          <label for ="name">Ingrese su nombre: </label>
          <input type="text" id='name'></input>
          <button type='submit'>Ingresar</button>
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

