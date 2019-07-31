import axios from 'axios'
const baseURL = 'http://localhost:3000'

class UserService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }
  getUser(data) {
    return this.service.get('/user', data)
  }

}

export default UserService