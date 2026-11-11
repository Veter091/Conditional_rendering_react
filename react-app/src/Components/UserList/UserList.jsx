import './UserList.css'
import { useState } from 'react'

export default function UserList() {

    const initialUser = [
        {id: 1, name: 'Богдан'},
        {id: 2, name: 'Володя'},
        {id: 3, name: 'Федор'},
        {id: 4, name: 'Игнат'},
        {id: 5, name: 'Альберт'},
        {id: 6, name: 'Прокофий'},
        {id: 7, name: 'Всеволод'},
    ]

    const [user, setUser] = useState(initialUser)
    const [editId, setEditId] = useState(null)
    const [editName, setEditName] = useState(null)


    function saveNewName(userID, newUserName) {

        setUser(user.map(u => {
            if (u.id === userID) {
                return {
                    ...u, 
                    name: newUserName,
                }
            }
            else return u
        }))
    }

    function handleKeyDown(e, userID, newUserName) {
        if (e.key === 'Enter') {
            saveNewName(userID, newUserName)
            setEditId(null)
        }

        if (e.key === 'Escape') {
            setEditId(null)
        }
    }


    return (
        <div className="user-list">

            <div className="user-list__container">

                <ul className="user-list__ul">
                    {user.map(u => (
                        <li
                        key={u.id}
                        className='user-list__li'>
                        {u.name}

                        <button
                        onClick={() => {
                            setEditId(u.id)
                            setEditName(u.name)
                        }}
                        >Переименовать</button>
                        {u.id === editId 
                        ? 
                        <input
                        onChange={(e) => setEditName(e.target.value)} 
                        onKeyDown={(e) => handleKeyDown(e, u.id, e.target.value)}
                        value={editName}></input>
                        : ''
                        }
                        </li>
                    ))}
                </ul>
            </div>
        </div>


    )
}
