import { Card, CardImg, Row, Col, Jumbotron, Container } from "reactstrap";

export default function SneakerJumbotronCarrousel() {
  return (
    <Jumbotron fluid>
      <Container className="md-container">
        <h6 className="display-4 text-center">New Raffles this week</h6>
        <Row>
          <Col className="jumbos">
            <Card>
              <CardImg
                className="raffle-jumbo"
                top
                src="https://static.sneakerjagers.com/products/660x660/200540.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col className="jumbos">
            <Card>
              <CardImg
                className="raffle-jumbo"
                top
                src="https://static.sneakerjagers.com/products/660x660/200540.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col className="jumbos">
            <Card>
              <CardImg
                className="raffle-jumbo"
                top
                src="https://static.sneakerjagers.com/products/660x660/200540.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col className="jumbos">
            <Card>
              <CardImg
                className="raffle-jumbo"
                top
                src="https://static.sneakerjagers.com/products/660x660/200540.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col className="jumbos">
            <Card>
              <CardImg
                className="raffle-jumbo"
                top
                src="https://static.sneakerjagers.com/products/660x660/200540.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col className="jumbos">
            <Card>
              <CardImg
                className="raffle-jumbo"
                top
                src="https://static.sneakerjagers.com/products/660x660/200540.jpg"
                alt="Card image cap"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
