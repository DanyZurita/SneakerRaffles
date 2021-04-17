import React from 'react';

import {Col,Card,CardImg,CardBody,CardTitle,CardSubtitle, Button} from "reactstrap";

export default function SneakerCard() {

  return (
    <Col>
      <Card className="sneakerCard" top width="100%">
        <CardImg  className="sneakerCardImg" top width="100%" src="https://static.sneakerjagers.com/products/660x660/70018.jpg" alt="Air Force 1" />
        <CardBody>
          <CardTitle tag="h5" className="text-dark">Air Force 1</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">99,99&euro;</CardSubtitle>
          <Button>Buy</Button>
        </CardBody>
      </Card>
    </Col>
  );
}