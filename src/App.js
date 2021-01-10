import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3 '>
        <Container fluid>
          <Switch>
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/' component={Homepage} />
            <Route path='*' component={ErrorPage} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
