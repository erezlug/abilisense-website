import React from 'react'
import { Container } from 'react-bootstrap'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const images = [
  '//placekitten.com/500/500',
  '//placekitten.com/500/500',
  '//placekitten.com/500/500',
  '//placekitten.com/500/500',
]

const UseCasesPage = () => {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <Container className='d-flex flex-wrap justify-content-around align-items-center'>
          <a className='flex-0 ' href={images[0]}>
            <img className='mb-5 w-100' src={images[0]} alt='Smart Homes' />
          </a>
          <a href='link/to/the/full/width/image_two.jpg'>
            <img className='mb-5 w-100' src={images[1]} alt='Baby Care' />
          </a>
          <a href='link/to/the/full/width/image_two.jpg'>
            <img className='mb-5 w-100' src={images[2]} alt='Elderly Care' />
          </a>
          <a href='link/to/the/full/width/image_two.jpg'>
            <img className='mb-5 w-100' src={images[3]} alt='Security' />
          </a>
        </Container>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}

export default UseCasesPage
