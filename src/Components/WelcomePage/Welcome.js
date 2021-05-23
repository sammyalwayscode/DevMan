import React from 'react'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import CaroImg1 from '../Images/one.png'
import CaroImg2 from '../Images/two.png'
import CaroImg3 from '../Images/three.png'
import CaroImg4 from '../Images/four.png'
import CaroImg5 from '../Images/five.png'
import CaroImg6 from '../Images/six.png'
import CaroImg7 from '../Images/seven.png'
import CaroImg8 from '../Images/nine.png'
import CaroImg9 from '../Images/eight.png'

function Welcome() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg1}
            alt="First slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg2}
            alt="Second slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg3}
            alt="Third slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg4}
            alt="Third slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg5}
            alt="Third slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg6}
            alt="Third slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg7}
            alt="Third slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg8}
            alt="Third slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CaroImg9}
            alt="Third slide"
            style={{ height: '100vh', width: '100vw', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <div>LogIn to Get Started </div>
            <Link to='/login'><Button style={{ width: '100px', fontWeight: 'bold', fontFamily: 'poppins' }}>Log in</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Welcome


