import React, { useState } from 'react'
import TaskInput from './TaskInput'
import TaskItem from './TaskItem';


export const TaskList = () => {
    const [tareas, setTareas] = useState([]);
    const guardar = (nuevaTarea) => {
        setTareas([...tareas, {texto: nuevaTarea,realizada: false}]);
    }

    return (
        <div>
                <TaskInput guardar={guardar}/>
                <ul>
                    {tareas.map((tarea, index) => (
                        <TaskItem key={index} tarea={tarea} index={index} tareas={tareas} setTareas={setTareas}/>
                    ))}
                </ul>
        </div>
    )
}

export default TaskList