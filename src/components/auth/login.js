import React from 'react'
import useForm from '../../hooks/useForm'
import AuthService from '../../services/auth'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const authService = new AuthService()
  const [form, handleInputs] = useForm()

  const handleLogin = () => {
    authService.login(form)
      .then(response => {
        props.history.push('/screenshots')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="login">
        <h2>Login</h2>
        <div>
          <input type="email" name="email" placeholder="Email" onChange={handleInputs} />
          <input type="password" name="password" placeholder="Password" onChange={handleInputs} />
          <button id="login" onClick={handleLogin}>Login</button>
          <small>¿No tienes una cuenta? <Link to="/">Entra aquí</Link></small>
        </div>
      </div>
    </div>
  )
}

export default Login
