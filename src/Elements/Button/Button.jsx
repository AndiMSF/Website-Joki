import './button.css'
const Button = (props) => {
  return (
    <button type='submit' className='button'>{props.title}</button>
  )
}

export default Button