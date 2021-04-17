import Head from "next/head";

import { Container } from "reactstrap";

import SneakerNavbar from "./_navbar";
import SneakerFooter from "./_footer";
import SneakerFormHeader from "./_formHeader";
import SneakersForm from "./_form";

export default function Form() {
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
      <SneakerFormHeader />
      <Container className="md-container">
        <SneakersForm />
      </Container>
      <SneakerFooter />
    </div>
  );
}
