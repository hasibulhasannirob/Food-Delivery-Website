import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download</p>
      <div className="app-name">
        <p className="name">Tomato</p>
        <p>App</p>
      </div>
        <div className="app-download-platforms">
            <img src={assets.play_store} />
            <img src={assets.app_store} />
        </div>
    </div>
  )
}

export default AppDownload
