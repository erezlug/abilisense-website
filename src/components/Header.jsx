import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import logo from '../../src/assets/logo.png'

const Header = () => {
  return (
    <header>
      <Navbar variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image className='logo' fluid src={logo} alt='Abilisense' />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link className='nav-item'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/platform'>
                <Nav.Link>Platform</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Technology'>
                <Nav.Link>Technology</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/use-cases'>
                <Nav.Link>Use-Cases</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/media'>
                <Nav.Link>Media</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer className='mr-sm-2' to='/login'>
                <Nav.Link className='header-login-link'>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
