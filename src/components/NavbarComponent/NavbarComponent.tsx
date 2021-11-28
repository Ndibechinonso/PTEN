import './NavbarComponent.scss'
import { Navbar, Container, Nav, NavDropdown, CardGroup, Card } from 'react-bootstrap';
import { Button } from '../Button/Button';
import React, { useState } from 'react';


export const NavbarComponent = () =>{
  
    return(
      <>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">PTEN</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>

        <NavDropdown renderMenuOnMount  title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">121 Coaching</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Grow your business</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown renderMenuOnMount title="Events" id="basic-nav-dropdown" className='first-nav-item'>
        <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Events</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>
      Resource 1
      </Card.Text>
      <Card.Text>
      Resource 2
      </Card.Text>
      <Card.Text>
      Resource 1
      </Card.Text>
      <Card.Text>
      Resource 2
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Learning and Information</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
            <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  
</CardGroup>
        </NavDropdown>

        <NavDropdown renderMenuOnMount title="Community" id="basic-nav-dropdown" className='first-nav-item'>
        <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Our Community</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>
      Resource 1
      </Card.Text>
      <Card.Text>
      Resource 2
      </Card.Text>
      <Card.Text>
      Resource 1
      </Card.Text>
      <Card.Text>
      Resource 2
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Learn about our Community</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
            <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  
</CardGroup>
        </NavDropdown>
        <Nav.Link href="#home">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

{/* <Button style={{background: 'red'}} text='hello' /> */}
</>
    )
}