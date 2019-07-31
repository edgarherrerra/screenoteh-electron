import React from 'react'
import useForm from '../../hooks/useForm'
import AuthService from '../../services/auth'
import { Link } from 'react-router-dom'
import CategoryService from '../../services/categories'

const Signup = (props) => {
  const authService = new AuthService()
  const categoryService = new CategoryService()
  const [form, handleInputs] = useForm()

  const handleSignup = () => {
    authService.signup(form)
      .then(response => {
        // aqui debería de ir una notificación o un SWAL o un TOASTR
        props.history.push('/login')
        categoryService.createCategoryByDefault(response)
          .then(res => {
            console.log(res)
          })
      })
      .catch(err => console.log(err))
      .catch(err => console.log(err))
  }

  return (
    <div className="signup">
      <h2>Bienvenido a Screenoteh para Mac.</h2>
      <p>La aplicación con la cual podrás tener un mayor control de tus screenshots</p>
      <div>
        <input type="text" name="username" placeholder="Name" onChange={e => handleInputs(e)} />
        <input type="email" name="email" placeholder="Email" onChange={e => handleInputs(e)} />
        <input type="password" name="password" placeholder="Password" onChange={e => handleInputs(e)} />
        <button onClick={handleSignup}>Signup</button>
        <small>¿Ya tienes cuenta? <Link to="/login">Entra aquí</Link></small>
      </div>
    </div>
  )
}
export default Signup