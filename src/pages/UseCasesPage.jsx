import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import smartHome from '../../src/assets/img/Smart-Home.jpg'
import babyCare from '../../src/assets/img/baby-care.jpg'
import security from '../../src/assets/img/security.jpg'
import elderlyCare from '../../src/assets/img/elderly-care.jpg'

const images = [
  '//placekitten.com/450/350',
  '//placekitten.com/450/350',
  '//placekitten.com/450/350',
  '//placekitten.com/450/350',
]

const UseCasesPage = () => {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <Container className='d-flex flex-wrap use-cases-container justify-content-center align-items-center'>
          <Row>
            <Col md={6}>
              <a href={smartHome}>
                <img
                  className='mb-3 mr-3 w-100'
                  src={smartHome}
                  alt='Smart Homes'
                />
              </a>
              <a href={babyCare}>
                <img
                  className='mb-3 mr-3 w-100'
                  src={babyCare}
                  alt='Baby Care'
                />
              </a>
            </Col>
            <Col md={6}>
              <a href={elderlyCare}>
                <img
                  className='mb-3 mr-3 w-100'
                  src={elderlyCare}
                  alt='Elderly Care'
                />
              </a>
              <a href={security}>
                <img
                  className='mb-3 mr-3 w-100'
                  src={security}
                  alt='Security'
                />
              </a>
            </Col>
          </Row>
        </Container>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}

export default UseCasesPage
