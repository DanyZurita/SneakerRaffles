import React from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const SneakersForm = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input
              type="name"
              name="name"
              id="name"
              placeholder="John"
              aria-label="name"
            />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="examplePassword">Lastname</Label>
            <Input
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="Snow Smith"
              aria-label="lastname"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="username">Username</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="username"
            name="username"
            id="username"
            aria-label="username"
          />
        </InputGroup>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@gmail.com"
              aria-label="email"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
              aria-label="password"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input
          type="text"
          name="address"
          id="exampleAddress"
          placeholder="1234 Main St"
          aria-label="address"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input
          type="text"
          name="address2"
          id="exampleAddress2"
          placeholder="Apartment, studio, or floor"
          aria-label="address two"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input
              type="text"
              name="city"
              id="exampleCity"
              placeholder="Spain"
              aria-label="city"
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input
              type="text"
              name="state"
              id="exampleState"
              placeholder="Madrid"
              aria-label="state"
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input
              type="text"
              name="zip"
              id="exampleZip"
              placeholder="00000"
              aria-label="zip"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          <FormGroup check>
            <Input
              type="checkbox"
              name="conditions"
              id="conditions"
              aria-label="conditions"
            />
            <Label for="exampleCheck" check>
              Accept terms and conditions
            </Label>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup check>
            <Input
              type="checkbox"
              name="announcements"
              id="announcements"
              aria-label="announcements"
            />
            <Label for="exampleCheck" check>
              Subscribe for new announcements
            </Label>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup check>
            <Input
              type="checkbox"
              name="commercial"
              id="commercial"
              aria-label="commercial"
            />
            <Label for="exampleCheck" check>
              Share commercial data
            </Label>
          </FormGroup>
        </Col>
        <Col sm={{ size: "auto", offset: 1 }} md={1}>
          <Button color="danger" className="text-dark display-1">
            <h6>Sign in</h6>
          </Button>
        </Col>
      </Row>
      <br />
    </Form>
  );
};

export default SneakersForm;
