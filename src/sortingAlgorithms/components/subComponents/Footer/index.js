import React from 'react';

//  import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import {
  
} from react-icons/md;

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
            <h5 class="text-uppercase">Resources</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://www.geeksforgeeks.org/sorting-algorithms/" rel="noopener noreferrer" target="_blank" class="text-white">Geek for Geeks</a>
              </li>
              <li>
                <a href="https://www.javatpoint.com/data-structure-tutorial" rel="noopener noreferrer" target="_blank" class="text-white">Javatpoint</a>
              </li>
              <li>
                <a href="https://www.hackerrank.com" rel="noopener noreferrer" target="_blank" class="text-white">Hacker Rank</a>
              </li>
              <li>
                <a href="https://www.hackerearth.com" rel="noopener noreferrer" target="_blank" class="text-white">HackerEarth</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Contacts</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://github.com/Ranjan-Das-cloud" target="_blank" rel="noopener noreferrer" class="text-white">Github</a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" class="text-white">LinkedIn</a>
              </li>
              <li>
                <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer" class="text-white">Email</a>
              </li>
              <li>
                <a href="https://www.medium.com/@ranjan.das" target="_blank" rel="noopener noreferrer" class="text-white">Blogs</a>
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
