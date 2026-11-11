import './Notes.css'
import { useState } from 'react'

export default function Notes() {

    const initialNotes = []

    const [currentNote, setCurrentNote] = useState('')
    const [notes, setNotes] = useState(initialNotes)

    function addNote() {

        setNotes([
            ...notes,
            {id: Date.now(), text: currentNote}
        ])

        setCurrentNote('')
    }

    function deleteNote(noteID) {
        setNotes(notes.filter(n => n.id !== noteID))
    }

    return (
        <div className="notes">
            <div className="notes__container">

                <input
                onChange={e => setCurrentNote(e.target.value)}
                value={currentNote}
                type="text" 
                className="notes__input" 
                placeholder='Добавьте заметку...' />
                <button
                onClick={addNote} 
                className="notes__button">Добавить заметку</button>

                <ul className="notes__ul">
                    {notes.map(n => (
                        <li 
                        key={n.id}
                        className='notes__li'
                        >
                            {n.text}
                        <button

                        onClick={() => deleteNote(n.id)}>Удалить</button>
                        </li>
                        
                    ))}
                </ul>

            </div>
        </div>
    )
}