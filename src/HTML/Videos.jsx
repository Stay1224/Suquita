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
          <section className="video">
            <h1>Vídeos</h1>
            <hr />

            <div className="vrideo">
            <iframe src="https://www.youtube.com/watch?v=KsXbXoWesLY" frameborder="0" allowFullScreen></iframe>
            </div>

            <Link to="https://youtu.be/YMGiZMBldh4?si=mb2CjkaRqLMyRsuq">Clique aqui para ver o video base</Link>
          </section>
        </main>
      </body>
    </>
  )
}

export default Videos