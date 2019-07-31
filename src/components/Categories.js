import React from 'react'
import useForm from '../hooks/useForm'
import CategoryService from '../services/categories'

const Categories = (props) => {
  const categoryService = new CategoryService()
  const [form, handleInputs] = useForm()

  const handleCategory = () => {
    categoryService.createCategory(form)
      .then(response => {
        // aqui debería de ir una notificación o un SWAL o un TOASTR
        props.history.push('/main')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Categories</h1>
      <label htmlFor="">Categoria</label>
      <input type="text" name="categorie" placeholder="Categorie" onChange={e => handleInputs(e)} />
      <button onClick={handleCategory}>Crear</button>
    </div>
  )
}

export default Categories
