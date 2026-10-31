import './Greeting.css'

function Greeting() {

    const hour = new Date().getHours()

    let time = ''
    let classColor = ''

    if (hour < 12) {
        time = 'Доброе утро!'
        classColor = 'greeting__text--morning'
    }
    else if (hour < 18) {
        time = 'Добрый день!'
        classColor = 'greeting__text--day'
    }
    else {
        time = 'Добрый вечер!'
        classColor = 'greeting__text--evening'
    }

    return (
        <div className="greeting">
            <div className={`greeting__text ${classColor}`}>
                {time}
            </div>
        </div>
    )

}

export default Greeting