import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span
        //podemos condicionar directamente estilos
        // style={ready?{background:"green"}:{background:"red"}}

        //podemos condicionar clases de estilos
        className={ready ? 'bg-green' : 'bg-red'}
      >
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
