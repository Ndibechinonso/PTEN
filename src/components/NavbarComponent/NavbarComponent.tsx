import './NavbarComponent.scss'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Nav, NavDropdown, CardGroup, Card } from 'react-bootstrap';
import { Button } from '../Button/Button';
import ptennavlogo from '../../Assets/ptenlogo_white.svg'
import axios from 'axios';
import { useNavigate } from "react-router";



type NavBarProps = {
loggedIn? : boolean
}




export const NavbarComponent = () =>{

  const [loading, setLoading] = useState(true)

  const [loggedIn, setLoggedIn] = useState(false)



  const backendURL = process.env.REACT_APP_BACKEND_URL;


  useEffect(()=>{
    fetch(`${backendURL}/users/checkToken`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res: any) => {
              if (res.status === 200) {
                setLoading(false)
                setLoggedIn(true);
              } else {
                const error = new Error(res.error);
                throw error;
              }
            })
            .catch(err => {
              console.error(err);
              setLoading(false)
              setLoggedIn(false)
          
            });
  }, [])



  const navigate = useNavigate();

  const logoutHandler = () => {

    var backendURL =process.env.REACT_APP_BACKEND_URL
    
    fetch(`${backendURL}users/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
      )
        .then(res => { navigate('/') })
        .catch((err)=> console.log(err))
     }

    return(
      <>
<Navbar bg="light" expand="lg" sticky="top" className='sticky'>
  <Container>
    <Navbar.Brand href="/"><img src={ptennavlogo} alt='logo'/> PTEN</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>

        <NavDropdown renderMenuOnMount  title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">121 Coaching</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Let's Talk Buiness</NavDropdown.Item>
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

        <NavDropdown renderMenuOnMount title="Membership" id="basic-nav-dropdown" className='first-nav-item'>
        <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Membership</Card.Title>
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
      {/* <div className='signIn'>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup"><Button class='signup-btn' text='Sign up for free'/></Nav.Link>
        </div> */}
      {!loading ? !loggedIn ?
      (<div className='signIn'>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup"><Button className='signup-btn' text='Sign up for free'/></Nav.Link>
        </div>) : <Button className='signout-btn' text='Logout' onClick={logoutHandler} /> : null }
    </Navbar.Collapse>
  </Container>
</Navbar>

{/* <Button className='signup-btn' text='Logout' onClick={logoutHandler}/> */}
</>
    )
}