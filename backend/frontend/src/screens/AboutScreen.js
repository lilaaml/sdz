import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

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
          Sarana Pintu adalah perusahaan yang bergerak dalam bidang pertukangan yang memfokuskan dalam pintu pvc. perusahaan ini berdiri sejak tahun 2006 dengan nama awal sarana aneka pintu yang berlokasi di jakarta barat. perusahaan kami memilih untuk mengembangkan pintu pvc karena pintu pvc banyak digunakan orang untuk pintu kamar mandi. Dengan bahan PVC atau disebut juga Polyvinyl Chloride maka pintu akan tahan air dan tidak mudah lapuk. Perusahaan kami juga sudah menangani banyak proyek seperti proyek apertement mgr 2, tokyo riverside, ruko sumarecon, golden city bekasi, dan masi banyak lagi
        </Col>  
      </Row>
      <Card>
        <Card.Body>
        <Row className='m-4'>
          <Col>
            <h3 className='text-center'>Our Vision</h3>
            <p>Dengan menyediakan produk dengan kualitas terbaik, kami memberikan solusi kolaboratif untuk memberikan layanan terbaik kepada konsumen.</p>
          </Col>
          <Col>
            <h3 className='text-center'>Our Mision</h3>
            <p>Menciptakan dan mengembangkan produk pintu kualitas terbaik dengan harga terjangkau bagi konsumen.</p>
          </Col>
        </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AboutUs