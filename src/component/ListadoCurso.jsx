import { useState } from "react";
import { AgregarTarea } from "./AgregarTarea";

// eslint-disable-next-line react/prop-types
const Item = ({ nombre, visto }) => {
  return (
    <li> 
      {nombre} {visto ? "✅" : "❌"}{" "}
    </li>
  );
};

export const ListadoCurso = () => {
  let listado = [
    { nombre: "INstalaciones necesarias", visto: true },
    { nombre: "INstalaciones necesarias", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables en JSX", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "useState", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];

  // eslint-disable-next-line no-unused-vars
  const [arreglo, setArreglo] = useState(listado);
  console.log(arreglo)
  
  return (
    <>
      <h1>Listado del Curso</h1>
      <AgregarTarea ArgumentoParaAgregarTarea={setArreglo}></AgregarTarea>
      <ol>
        {/* eslint-disable-next-line react/jsx-key*/}
        {arreglo.map(x => <Item key={x.nombre} nombre={x.nombre} visto={x.visto}></Item>)}
      </ol>
      <button>Agregar Tarea</button>
    </>
  );
};
