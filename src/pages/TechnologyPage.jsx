import React from 'react'
import { Container } from 'react-bootstrap'

const TechnologyPage = () => {
  return (
    <Container className='mb-1'>
      <video
        controls
        className='homepage-video'
        autoPlay
        loop
        muted
        src='/videos/technology-video.mp4'
      />
      <h4 className='text-center primary-color'>ABILISENSE</h4>
      <h5 className='text-center'>Sound Recognition Technology</h5>
      <p className='text-center lead'>
        Abilisense is the company behind the breakthrough technology that offers
        a sophisticated way to analyze sounds in home, work, city and transport
        environments. Abilisense provides assistance for life-threatening and
        unexpected situations based on sound analysis that use unique
        algorithms.
      </p>
      <br />
      <p className='text-center lead'>
        In order to feel safe and secure, the abilisense black-box monitors
        various sounds of dangerous situations and suspicious activities by
        transforming them into alerts directly to applications, command centers
        and IoT devices.
      </p>
    </Container>
  )
}

export default TechnologyPage
