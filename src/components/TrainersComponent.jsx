import React from 'react'

const TrainersComponent = () => {
  return (
    <section id='trainers-section'>
        <div className="container">
            <div className="trainer">
                <img src={`${process.env.PUBLIC_URL}/assets/images/andrei.webp`} alt="Andrei" />
                <p>Andrei Cristian</p>
            </div>
             <div className="trainer">
                <img src={`${process.env.PUBLIC_URL}/assets/images/iosif.webp`} alt="Iosif" />
                <p>Iosif Andrei</p>
            </div>
             <div className="trainer">
                <img src={`${process.env.PUBLIC_URL}/assets/images/catalin.webp`} alt="Catalin" />
                <p>Pletea Catalin</p>
            </div>
        </div>
    </section>
  )
}

export default TrainersComponent