import React, { useState, useEffect } from 'react'
import ScreenshotsService from '../../services/screenshots'
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom'

const Screenshots = (props) => {
  const screenshotsService = new ScreenshotsService()
  const [screenshots, setScreenshots] = useState([])

  useEffect(() => {
    screenshotsService
      .getAllScreenshots()
      .then(({ data }) => {
        setScreenshots(prevState => {
          return [...prevState, ...data.response[0].categories[0].screenshots]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Sidebar />
      <div className="screenshot-container">
        {screenshots ? screenshots.map((e, i) => {
          return (
            <Link to="/screenshot" key={i}>
            <div className="screenshot-box-container" >
                <img src={e.images} alt={i} />
            </div>
            </Link>
          )
        }) : ''}
      </div>
    </div>
  )
}

export default Screenshots
