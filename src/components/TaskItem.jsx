import React from 'react'

const TaskItem = ({tarea, index, tareas, setTareas}) => {
    return (
        <li key={index} 
                        style={{ textDecoration: tarea.realizada ? 'line-through' : 'none' }}>
                        {tarea.texto}
                        <button onClick={() => setTareas(tareas.map((n, i) => i === index ? {...n, realizada: !n.realizada} : n))}>
                            {tarea.realizada ? 'No Realizada' : 'Realizada'}
                        </button>
                        <button onClick={() => setTareas(tareas.filter((n,i) => i !== index))}>
                            Eliminar
                        </button>
                    </li>
    )
}

export default TaskItem;