import React from "react";

import { Row } from "reactstrap";

import SneakerCard from "./_card";

export default function SneakerCards() {
  return (
    <div className="cardsDisplay">
      <Row>
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
      </Row>
      <Row>
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
      </Row>
      <Row>
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
        <SneakerCard />
      </Row>
    </div>
  );
}
