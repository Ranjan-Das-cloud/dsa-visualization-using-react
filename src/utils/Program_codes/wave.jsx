import React from "react";
import { MDBBtn, MDBCardImage } from "mdbreact";

const WavesPage = () => {
  return (
    <div>
      <MDBBtn color="primary">Click me</MDBBtn>

      <MDBCardImage
        className="img-fluid"
        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(54).jpg"
        waves
      />
    </div>
  );
}

export default WavesPage;