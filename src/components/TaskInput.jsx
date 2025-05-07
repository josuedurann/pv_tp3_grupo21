import React, { useState } from 'react'

const TaskInput = ({guardar}) => {
        const [tarea, setTarea] = useState("");
        const manejarEnvio = () => {
            guardar(tarea);
            setTarea("");
        }
    return (
        <div>
            <input type="text" value = {tarea} onChange={(e) => setTarea(e.target.value)} placeholder='Nueva tarea'/>
            <button onClick={manejarEnvio}>Agregar</button>
        </div>
    )
}

export default TaskInput