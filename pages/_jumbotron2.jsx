import { Container, Jumbotron, Button } from "reactstrap";

export default function SneakerJumbotron() {
  return (
    <Jumbotron className="jumbo2 text-dark" fluid>
      <Container fluid>
        <h1 className="display-3 text-center">Trending Raffles</h1>
        <p className="lead text-center">All trending raffles here</p>
        <hr hidden></hr>
        <p className="lead text-center">
          <Button color="dark">
            <h3>Raffle</h3>
          </Button>
        </p>
      </Container>
    </Jumbotron>
  );
}
