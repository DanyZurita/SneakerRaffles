import React from "react";

import { Container } from "reactstrap";

export default function SneakerFooter() {
  return (
    <footer className="text-white" fluid>
      <Container className="md-container" fluid>
        <h1 className="display-6 text-center">SNEAKERS RAFFLES</h1>
        <hr className="my-2" />
        <div class="template-demo text-center">
          {" "}
          <button
            type="button"
            class="btn btn-social-icon btn-facebook btn-rounded"
          >
            <i class="fa fa-facebook"></i>
          </button>{" "}
          <button
            type="button"
            class="btn btn-social-icon btn-youtube btn-rounded"
          >
            <i class="fa fa-youtube"></i>
          </button>{" "}
          <button
            type="button"
            class="btn btn-social-icon btn-twitter btn-rounded"
          >
            <i class="fa fa-twitter"></i>
          </button>{" "}
          <button
            type="button"
            class="btn btn-social-icon btn-dribbble btn-rounded"
          >
            <i class="fa fa-dribbble"></i>
          </button>{" "}
          <button
            type="button"
            class="btn btn-social-icon btn-linkedin btn-rounded"
          >
            <i class="fa fa-linkedin"></i>
          </button>{" "}
          <button
            type="button"
            class="btn btn-social-icon btn-instagram btn-rounded"
          >
            <i class="fa fa-instagram"></i>
          </button>{" "}
        </div>

        <div className="text-center">&copy; 2021 Daniel Zurita</div>
      </Container>
    </footer>
  );
}
