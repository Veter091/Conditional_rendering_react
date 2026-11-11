import './FormPost.css'
import { useState, useId } from 'react'

export default function FormPost() {

    // Уникальный id
    const id = useId()

    // Переменная для хранения поста
    const [post, setPost] = useState('') 
    // Статус поста (смогли опубликовать или нет)
    const [postStatus, setPostStatus] = useState(null)
    // Статус кнопки (блокировка в случае опубликования поста)
    const [buttonStatus, setButtonStatus] = useState(false)
    // Появление ожидания во время публикации поста
    const [loading, setLoading] = useState(false)


    // Функция для остановки дефолт. поведения
    function formStatus(e) {
        e.preventDefault()
    }

    // Функция для кнопки - сбросить
    function buttonClear() {
        setPost('')
        setPostStatus(null)
        setButtonStatus(false)
    }

    // Функция для кнопки - Сохранить черновик
    function buttonSaveDraft() {
        setPostStatus('draft')
    }

    // Функция для кнопки - Опубликовать
    function buttonPublishPost() {

        // Вероятность 30% появления ошибки
        const probability = 0.3

        // Появление ожидания 
        setLoading(true)

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (Math.random() < probability) {
                    setPostStatus(false)
                    setLoading(false)
                    reject('Ошибка публикации')
                }
                else {
                    // Пост опубликовался
                    setPostStatus(true)
                    // Блокируем кнопки
                    setButtonStatus(true)
                    // Убираем ожидание
                    setLoading(false)
                    resolve('Пост опубликован!')
                }
            }, 1500)
        })
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div className="form-post">

            <div className="form-post__container">

                <form 
                onSubmit={formStatus}
                className="form-post__form">

                    <label 
                    htmlFor={id} 
                    className="form-post__label">Введите пост:</label>
                    <textarea 
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    disabled={buttonStatus}
                    id={id}
                    placeholder='Введите пост...' 
                    className="form-post__textarea"></textarea>

                    <div className="form-post__footer">
                        <button
                        type="button"
                        onClick={buttonSaveDraft}
                        disabled={buttonStatus}
                        className="form-post__button">Сохранить как черновик</button>

                        <button
                        type="button"
                        onClick={buttonPublishPost}
                        disabled={buttonStatus} 
                        className="form-post__button">Опубликовать</button>

                        <button
                        type="button" 
                        onClick={buttonClear}
                        className="form-post__button">Сбросить</button>
                    </div>

                    <div className="form-post__post">
                        {loading === true 
                        ? 'Ожидание...'
                        :(
                        <>
                        {postStatus === null && 'Ожидания действия'}
                        {postStatus === 'draft' && 'Сохранено как черновик'}
                        {postStatus === true && 'Пост опубликован!'}
                        {postStatus === false && <span>Ошибка публикации!</span>}
                        </>)
                        }

                    </div>
                </form>

            </div>
        </div>
    )
}