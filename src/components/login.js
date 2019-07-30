import React from 'react'
import useForm from '../hooks/useForm'
import AuthService from '../services/auth'

const Login = (props) => {
  const authService = new AuthService()
  const [form, handleInputs] = useForm()

  const handleLogin = () => {
    authService.login(form)
      .then(response => {
        props.history.push('/main')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="login">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleInputs} />
        <input type="password" name="password" placeholder="Password" onChange={handleInputs} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login
