import React from 'react'
import { Container } from 'react-bootstrap'

const Homepage = () => {
  return (
    <Container fluid className='mb-1 '>
      <h4 className='text-center pb-3'>
        MOST INNOVATIVE SMART LISTENING IOT SOLUTION
      </h4>
      <video
        controls
        className='homepage-video'
        autoPlay
        loop
        muted
        src='/videos/AbilisenseHomeVideo.mp4'
      />
      <h4 className='text-center pt-3'>
        Selected by VODAFONE to be #5GDIG TOP 100
      </h4>
    </Container>
  )
}

export default Homepage
