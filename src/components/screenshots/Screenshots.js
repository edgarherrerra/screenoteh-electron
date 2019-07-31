import React, { useState, useEffect } from 'react'
import ScreenshotsService from '../../services/screenshots'
import Sidebar from '../Sidebar';

const Screenshots = () => {
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
            <div className="screenshot-box-container" key={i}>
              <img src={e.images} alt={i} />
            </div>
          )
        }) : ''}
      </div>
    </div>
  )
}

export default Screenshots
