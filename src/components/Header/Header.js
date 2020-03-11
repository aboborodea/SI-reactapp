import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const alwaysOptions = (
  <Fragment>
    <Nav.Link to="/">Home</Nav.Link>
    <Nav.Link to="/">How it works</Nav.Link>
    <Nav.Link to="/">News</Nav.Link>
    <Nav.Link to="/">About Us</Nav.Link>
    <Nav.Link to="/">Agents & Brokers</Nav.Link>
  </Fragment>
)

const signUpButton = (
  <Fragment>
    <Button variant="secondary" size="lg" active>
    Sign up
    </Button>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar>
    <Navbar.Brand href="#">
      Surround Insurance
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
        { signUpButton }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
