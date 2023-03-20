import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
const Navigationbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Isara K.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/aboutme">about:me</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1fm2IgKQ8geNUTGc_3ZpSA7hM3OGZiWc5" target="_blank">Resume</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/isarawn/" target="_blank">LinkedIn</Nav.Link>
              <Nav.Link href="https://github.com/isarafx" target="_blank">Github</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigationbar
