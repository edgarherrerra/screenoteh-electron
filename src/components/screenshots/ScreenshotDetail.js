import React, { useState, useEffect } from 'react'
import ScreenshotsService from '../../services/screenshots'
import Rightbar from './Rightbar'
import Horizontalbar from './Horizontalbar';

const ScreenshotDetail = (props) => {
  const screenshotsService = new ScreenshotsService()
  const [screenshots, setScreenshots] = useState({})


  useEffect(() => {
    screenshotsService
      .getOneScreenshot(props.match.params.id)
      .then(({ data }) => {
        setScreenshots(data.screenshot)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="screenshot-detail">
      <Horizontalbar />
      <Rightbar id={screenshots._id} comments={screenshots.comments} />
      {screenshots ?
        <div className="image-detail">
          <img src={screenshots.images} />
          <ul>
          </ul>
        </div>
        : ''
      }
    </div>
  )
}

export default ScreenshotDetail
