import './button.css'
import { useNavigate } from 'react-router-dom'
const Button = (props) => {
  const navigate = useNavigate()

  return (
    <button type='submit' className='button' onClick={() => navigate(props.href)}>{props.title}</button>
  )
}

export default Button