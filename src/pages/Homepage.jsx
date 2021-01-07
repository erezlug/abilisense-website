import React from 'react'
import { Container } from 'react-bootstrap'

const Homepage = () => {
  return (
    <Container fluid className='mb-5'>
      <video
        controls
        className='homepage-video'
        autoPlay
        loop
        muted
        src='/videos/AbilisenseHomeVideo.mp4'
      />
    </Container>
  )
}

export default Homepage
