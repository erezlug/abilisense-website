import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Container className=' '>
        <Row>
          <Col className='text-center py-3'>
            <Link
              className='social-links'
              to={{
                pathname: 'https://www.linkedin.com/company/abilisense/',
              }}
              target='_blank'
            >
              <i class='fab fa-linkedin fa-2x'></i>
            </Link>

            <Link
              className='social-links mx-4'
              to={{
                pathname: 'https://www.facebook.com/AbiliSense/',
              }}
              target='_blank'
            >
              <i class='fab fa-facebook fa-2x'></i>
            </Link>

            <Link
              className='social-links'
              to={{
                pathname: 'https://twitter.com/abilisense?lang=en',
              }}
              target='_blank'
            >
              <i class='fab fa-twitter fa-2x'></i>
            </Link>
          </Col>
        </Row>
        <Col className='text-center py-3'>
          ©{new Date().getFullYear()} by abilisense
        </Col>
      </Container>
    </footer>
  )
}

export default Footer
