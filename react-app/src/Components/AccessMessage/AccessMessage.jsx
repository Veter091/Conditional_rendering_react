import './AccessMessage.css'

function AccessMessage({age}) {

    return (
        <div className="answer">
            {age > 0 ?
            (
                age >= 18 
                ? <span className="answer__text--green">Добро пожаловать!</span> 
                : <span className="answer__text--red">Доступ запрещён!</span>
            )
            : null}
        </div>
    )
}

export default AccessMessage