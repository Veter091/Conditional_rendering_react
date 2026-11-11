import './TaskList.css'
import { useState } from 'react'

export default function TaskList() {

    const initialTask = [
        {id: 1, text: 'Изучить Html', status: false},
        {id: 2, text: 'Изучить CSS', status: false},
        {id: 3, text: 'Изучить JS', status: true},
        {id: 4, text: 'Изучить React', status: true},
        {id: 5, text: 'Практика', status: false},
        {id: 6, text: 'Устроиться на работу', status: false},
    ]

    const [tasks, setTasks] = useState(initialTask)

    function toggleStatusTask(taskID) {
        setTasks(tasks.map(t => 
            t.id === taskID ? {...t, status: !t.status} : t
        ))
    }



    return (
        <div className="task-list">

            <div className="task-list__container">

                <div className="task-list__ul">

                    {tasks.map(t => (
                        <li
                        key={t.id}
                        className={`task-list__li ${t.status === true 
                        ? 'active'
                        : '' 
                        }`}>
                        {t.text}

                        <input
                        checked={t.status}
                        onChange={() => toggleStatusTask(t.id)}
                        type='checkbox'
                        ></input>
                        </li>

                    ))}

                </div>
            </div>

        </div>
    )
}