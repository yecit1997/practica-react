import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Contador = ({ value }) => {

  const [contador, setContador] = useState(value);

  const handleClic = () => {
    setContador(contador + 1);
  };

  const menos = () => {
    setContador(contador - 1);
  };

  const mult = () =>{
    setContador(contador * 2)
  }

  return (
    <>
      <h2>Contador: </h2>
      <p>{contador}</p>
      <button onClick={handleClic}>+</button>
      <button onClick={menos}>-</button>
      <button onClick={mult}>*</button>
    </>
  );
};
