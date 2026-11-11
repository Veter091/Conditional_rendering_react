import './CustomButton.css'

export default function CustomButton({label, onPress}) {

    return (
        <button className='func-button' onClick={onPress}>
            {label}
        </button>
    )
}