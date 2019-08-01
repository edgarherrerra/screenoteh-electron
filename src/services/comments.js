import axios from 'axios'
const baseURL = 'http://localhost:3000/comments'

class CommentsService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }
  createComment(data, id) {
    data.id = id
    console.log(data)
    return this.service.post('/new', data, id)
  }
}

export default CommentsService