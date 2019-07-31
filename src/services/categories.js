import axios from 'axios'
const baseURL = 'http://localhost:3000/categories'

class CategoryService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }
  createCategoryByDefault(data = "Get started") {
    return this.service.post('/default', data)
  }

  createCategory(data) {
    return this.service.post('/new', data)
  }

}

export default CategoryService