import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AgregarTarea = ({ArgumentoParaAgregarTarea}) => {

  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (event) =>{
    setInputValue(event.target.value)
    
  }

  const funcionParaEnviar = (event) => {
    const envio = {
        nombre: inputValue,
        visto: false
    }
    event.preventDefault()
    ArgumentoParaAgregarTarea(tareas => [...tareas, envio])
  }

  return( 
    <>
    <form onSubmit={funcionParaEnviar}>
        <input type="text" 
        placeholder="Agragar tarea" 
        value={inputValue}
        onChange={ (event) => onChangeInput (event)} /> 
    </form>
    </>
  );
};
