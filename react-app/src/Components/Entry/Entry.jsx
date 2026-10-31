import './Entry.css'

function Entry({onTextChange}) {

    return (
        <div className="entry">
            <div className="entry__title">Вход</div>
            <input
             type="text" className="entry__input"
             placeholder='Введите ваш возраст...'
             onChange={(e) => onTextChange(e.target.value)}
             />
        </div>
    )
}

export default Entry