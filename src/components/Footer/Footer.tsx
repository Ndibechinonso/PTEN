import './Footer.scss'
import { CardGroup, Card } from "react-bootstrap"
export const Footer = () =>{
    return(
        <CardGroup className='footer-container'>
        <Card>
          <Card.Body className='brand-footer'>
            <Card.Title><a href=''>P-TEN</a></Card.Title>
            <Card.Title>
       Building your business
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Copyright © 2021 <a href='' className="text-muted">Part-Time Entrepreneuers Network</a></small>
          </Card.Footer>
        </Card>
        <Card>   
          <Card.Body>
            <Card.Title><a href=''>About Us</a></Card.Title>
            <Card.Title><a href=''>Contact Us</a></Card.Title>
            <Card.Title><a href=''>121 Coaching</a></Card.Title>
          </Card.Body>
        </Card>
        <Card  className='social-footer'>
          <Card.Body>
            <Card.Title>FOLLOW US</Card.Title>
            <Card.Title>
            <a href=''><i className="fab fa-facebook-square"></i></a>
            <a href=''><i className="fab fa-twitter-square"></i></a>
            <a href=''><i className="fab fa-instagram"></i></a>
            <a href=''><i className="fab fa-linkedin"></i></a>
            <a href=''><i className="fab fa-youtube"></i></a>
            </Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    )
}