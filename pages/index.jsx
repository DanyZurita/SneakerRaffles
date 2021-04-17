import Head from "next/head";

import { Container } from "reactstrap";

import SneakerNavbar from "./_navbar";
import SneakerJumbotronCarrousel from "./_jumbotron";
import SneakerJumbotron from "./_jumbotron2";
import Carrousel from "./_carrousel";
import SneakerCards from "./_cards";
import SneakerFilters from "./_filters";
import SneakerFooter from "./_footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Sneaker Raffles </title> <link rel="icon" href="/favicon.ico" />
        <link
          src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>{" "}
      <Container className="md-container">
        <SneakerNavbar />
      </Container>
      <SneakerJumbotronCarrousel />
      <Container className="md-container">
        <Carrousel />
        <SneakerJumbotron />
        <SneakerFilters />
        <SneakerCards />
      </Container>
      <SneakerFooter />
    </div>
  );
}
