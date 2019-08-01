import React, { useState, useEffect } from 'react'
import ScreenshotsService from '../../services/screenshots'

const ScreenshotDetail = () => {
  // const screenshotsService = new ScreenshotsService()
  // const [screenshots, setScreenshots] = useState([])


  // useEffect(() => {
  //   screenshotsService
  //     .getOneScreenshot()
  //     .then(({ data }) => {
  //       console.log(data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <div>
      <h1>Detalle</h1>
      {/* {screenshots ? screenshots.map((e, i) => {
          return (
            <div className="screenshot-box-container" key={i}>
                <img src={e.images} alt={i} />
            </div>
          )
        }) : ''} */}
    </div>
  )
}

export default ScreenshotDetail
