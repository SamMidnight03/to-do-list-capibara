import { useState } from "react";
import Tarea from "./components/Tarea";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTarea] = useState([]);

  function ActualizarTexto(event) {
    setTexto(event.target.value);
  }

  function AgregarTarea() {
    setTarea([...tareas, texto]);
    setTexto("");
  }

  function Eliminar(index){
    setTarea(tarea => {
      let nuevaTareas = [...tareas]
      nuevaTareas.splice(index, 1)
      return nuevaTareas
    })
  }

  return (
    <>
      <div>
        <div className="inputs">
          <h1>To Do List</h1>
          <input type="text" onChange={ActualizarTexto} value={texto} />
          <button onClick={AgregarTarea}>Agregar</button>
        </div>
        <div className="Imagenes">
          <img src="/capibara_cansado.jpg" alt="" id="Cansado"/>
          <p>Al reiniciar la pagina las tareas se borraran, ten cuidado</p>
        </div>
      </div>
      <div id="Tareas">
        <h2>Tareas</h2>
        {tareas.map((tarea, index) => {
          return <Tarea key={index} tarea={tarea} Eliminar={Eliminar} index={index}/>
        })}
      </div>
    </>
  );
}

export default App;
