import React from 'react'
import CommentsService from '../../services/comments'
import useForm from '../../hooks/useForm'

const Rightbar = (props) => {

  const commentsService = new CommentsService()
  const [form, handleInputs] = useForm()
  // {props.id}
  const handleComment = () => {
    commentsService.createComment(form, props.id)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="right-bar">
      <h1>Comentarios ⌨️</h1>
      <input type="text" name="comment" onChange={e => handleInputs(e)} />
      <button onClick={handleComment}>Agregar ✅</button>
      <ul>
        {props.comments ? props.comments.map((e, i) => {
          return <li key={i}>{e.comment}</li>
        }) : ""}
      </ul>
    </div>
  )
}

export default Rightbar
