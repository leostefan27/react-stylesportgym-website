import React from 'react'
import LocationComponent from './LocationComponent'
import TrainersComponent from './TrainersComponent'

const AboutUsComponent = () => {
  return (
    <section id='about-section'>
        <h1 className='trainers-heading'>Meet Our Trainers</h1>
        <TrainersComponent />
        <LocationComponent />
        <h1 className='quote'>Don't stop when you're tired, stop when you're done.</h1>
    </section>
  )
}

export default AboutUsComponent