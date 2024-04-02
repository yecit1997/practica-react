import React from "react";
import ReactDOM from "react-dom/client";
import { Contador } from "./component/Contador";
import { ListadoCurso } from "./component/ListadoCurso";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contador value={0} />
    <ListadoCurso/>
  </React.StrictMode>
);
