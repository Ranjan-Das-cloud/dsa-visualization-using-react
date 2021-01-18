import React from 'react';

//  import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <footer class="bg-primary text-white text-center text-lg-start Footer">
  
      <div class="container p-4">
        
        <div class="row">

          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">About Me</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
              Demonstrated with{' '}
                  <span className="Footer__Heart">&hearts;</span> by{' '}
                  <a
                    href="https://www.github.com/Ranjan-Das-cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Footer__Link text-white"
                  >
                    Ranjan Das
                  </a>
            </p>
          </div>
          
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Downloads</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 4</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-0">Contacts</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 4</a>
              </li>
            </ul>
          </div>
          
        </div>
        
      </div>
      
      <div class="text-center p-3" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
        © 2020 Copyright :&nbsp;&nbsp;
        <a class="text-white" href="https://github.com/Ranjan-Das-cloud">Ranjan-Das-cloud</a><span>&nbsp;&nbsp;&#9819;</span>
      </div>
      
    </footer>
  );
};

export default Footer;
