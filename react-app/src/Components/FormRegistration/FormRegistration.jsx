import './FormRegistration.css'
import { useState, useId } from "react";

export default function FormRegistration() {

    const id = useId()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        city: '',
    })

    function handleChange(e) {
        const {name, value} = e.target

        setFormData(prev => {
            return {...prev, [name]: value}
        })
    }

    const [submitted, setSubmitted] = useState(false)

    function formSubmit(e) {
        e.preventDefault()

        setSubmitted(true)

        console.log(formData)
    }


    return (
        <div className="form-registration">
            <div className="form-registration__container">

                <form
                onSubmit={formSubmit} 
                className="form-registration__form">
                    <label htmlFor={`${id}-name`} className="form-registration__label">Имя:</label>
                    <input 
                    value={formData.name}
                    onChange={handleChange}
                    id={`${id}-name`}
                    name='name' 
                    type="text" 
                    className="form-registration__input" />

                    <label htmlFor={`${id}-email`} className="form-registration__label">Email:</label>
                    <input 
                    value={formData.email}
                    onChange={handleChange}
                    id={`${id}-email`} 
                    name='email'
                    type="email" 
                    className="form-registration__input" />

                    <label htmlFor={`${id}-password`} className="form-registration__label">Пароль:</label>
                    <input 
                    value={formData.password}
                    onChange={handleChange}
                    id={`${id}-password`}
                    name='password'  
                    type="password" 
                    className="form-registration__input" />

                    <label htmlFor={`${id}-age`} className="form-registration__label">Возраст:</label>
                    <input 
                    value={formData.age}
                    onChange={handleChange}
                    id={`${id}-age`}
                    name='age' 
                    type="number" 
                    className="form-registration__input" />

                    <label htmlFor={`${id}-city`}className="form-registration__label">Город:</label>
                    <input 
                    value={formData.city}
                    onChange={handleChange}
                    id={`${id}-city`}
                    name='city' 
                    type="text" 
                    className="form-registration__input" />

                    <button type='submit' className="form-registration__button">Отправить</button>
                </form>

                <div className="form-registration__info">
                    {submitted 
                    ? 
                    <>
                    <p>Name: {formData.name}</p> <p>Email: {formData.email}</p> <p>Password: {formData.password}</p> <p>Age: {formData.age}</p> <p>City: {formData.city}</p>
                    </>
                    
                    : ''
                    }
                </div>
            </div>
        </div>
    )
}
