import React, { useState, useEffect } from 'react'
import UserService from '../services/user'
import CategoryService from '../services/categories'
import useForm from '../hooks/useForm'

const Sidebar = () => {
  const userService = new UserService()
  const categoryService = new CategoryService()
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false)
  const [form, handleInputs] = useForm()

  useEffect(() => {
    userService
      .getUser()
      .then(({ data }) => {
        console.log(data)
        setUser(data.user)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleCategory = () => {
    categoryService.createCategory(form)
      .then(response => {
        setShow(!show)
        // aqui debería de ir una notificación o un SWAL o un TOASTR
      })
      .catch(err => console.log(err))
  }

  const showInput = () => {
    setShow(!show)
  }


  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <h1>{user.username} 🥳</h1>
        <div className="new-category-container">
        {show ? <button onClick={handleCategory}>Agregar ✅</button> : <button onClick={showInput}>Nueva categoría ✍️</button>}
        </div>
        {show ? <input className="new-category-container-input" type="text" name="categorie" placeholder="Nueva categoría" onChange={e => handleInputs(e)} /> : <input className="hide" type="text" />}
      </div>
      <small>Categorías</small>
      <ul>
        {user.categories ? user.categories.map((e, i) => {
          return <li key={i}>{e.categorie}</li>
        }) : ``}
      </ul>
    </div>
  )
}

export default Sidebar
