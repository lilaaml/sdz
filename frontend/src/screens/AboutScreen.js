import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

function AboutUs() {
  return (
    <Container>
      <h1 className='text-center'>About Sarana Pintu</h1>
      <Card>
        <Card.Body>
          <Card.Img src="../static/images/about.jpg" />
        </Card.Body>
      </Card>
      <Row className='m-4'>
        <Col>
          <h3 className='text-center'>Our Business</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Col>
        <Col>
          <h3 className='text-center'>Logistics</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Col>
        <Col>
          <h3 className='text-center'>FAQ</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs