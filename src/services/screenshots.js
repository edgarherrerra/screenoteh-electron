import axios from 'axios'
const baseURL = 'http://localhost:3000'

class ScreenshotsService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }
  getAllScreenshots(data) {
    return this.service.get('/screenshots', data)
  }

}

export default ScreenshotsService