import React, { useState, useEffect } from 'react'
import ScreenshotsService from '../services/screenshots'

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
      <h1>Listado de screenshots</h1>
      {screenshots.map((e, i) => {
        return (
          <img src={e.images} key={i} />
        )
      })}
    </div>
  )
}

export default Screenshots
