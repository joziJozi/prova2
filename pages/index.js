import React from 'react'
import { Button, Card, Col, Row} from 'react-bootstrap'
import Pagina from '../components/Pagina'

const index = () => {
  return (
    <Pagina>
      <Row>
      <Col md= {3}>
        <Card border="danger" style={{ width: '22rem' }}>
        <Card.Header>Anime</Card.Header>
        <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/4/19644.jpg" />
        <Card.Body>
        <Button variant="danger">Ampliar</Button>
        </Card.Body>
      </Card>
       </Col>

       <Col md= {3}>
    <Card border= "danger" style={{ width: '18rem', left: '5rem' }}>
      <Card.Body>
        <Card.Title>Cowboy bebop</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Pagina>
  )
}

export default index