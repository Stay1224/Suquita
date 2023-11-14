import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'
import '../CSS/todas.css'
import '../CSS/Videos.css'

function Videos() {
  return (
    <>
    <body>
      <Header />

      <main>
        <sectioon className="video">
          <h1>Vídeos</h1>
        </sectioon>
      </main>
    </body>
    </>
  )
}

export default Videos