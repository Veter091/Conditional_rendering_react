import './LogButton.css'

export default function LogButton() {

    function handleClick() {
        console.log('Кнопка была нажата')
    }

    return (
        <button className='log-button' onClick={handleClick}>
            Нажми меня
        </button>
    )
}