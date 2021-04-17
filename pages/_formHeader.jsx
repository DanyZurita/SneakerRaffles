import { Container, Jumbotron } from "reactstrap";

export default function SneakerFormHeader() {
  return (
    <Jumbotron className="text-light" fluid>
      <Container fluid>
        <h1 className="display-3 text-center">Create your new account</h1>
        <p className="lead text-center">Get access to the platform now</p>
        <hr hidden></hr>
      </Container>
    </Jumbotron>
  );
}
