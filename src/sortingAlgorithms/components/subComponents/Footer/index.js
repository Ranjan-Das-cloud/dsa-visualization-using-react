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
            <h5 class="text-uppercase">Resources</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://www.geeksforgeeks.org/sorting-algorithms/" rel="noopener noreferrer" target="_blank" class="hover-me text-white">GeekforGeeks</a>
              </li>
              <li>
                <a href="https://www.programiz.com/dsa/bubble-sort" rel="noopener noreferrer" target="_blank" class="text-white">Programiz</a>
              </li>
              <li>
                <a href="https://www.javatpoint.com/data-structure-tutorial" rel="noopener noreferrer" target="_blank" class="text-white">Javatpoint</a>
              </li>
              <li>
                <a href="https://www.hackerearth.com" rel="noopener noreferrer" target="_blank" class="text-white">Codeacademy</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Code Editors</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" class="text-white"><i class="cib-hackerrank"></i>HackerRank</a>
              </li>
              <li>
                <a href="https://www.hackerearth.com" target="_blank" rel="noopener noreferrer" class="text-white"><i class="cib-hackerearth"></i>HackerEarth</a>
              </li>
              <li>
                <a href="https://www.leetcode.com" target="_blank" rel="noopener noreferrer" class="text-white"><i class="cib-leetcode"></i>LeetCode</a>
              </li>
              <li>
                <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" class="text-white"><i class="cib-codepen"></i>CodePen</a>
              </li>
            </ul>
          </div>
          
        </div>
        
      </div>

      <div class="mt-5">
          <div class='container has-text-centered'> 
          <div class='columns is-mobile is-centered'> 
            <div class='column is-5'> 
              <div> 
                <h1 class='title has-text-centered'> 
                    Contact Me 
                </h1> 
              </div> 
      
              <div class='box'> 
                <div> 
                  <span class="icon is-large"> 
                    <span class="fa-stack fa-lg"> 
                      <a href="https://github.com/Ranjan-Das-cloud" target="_blank" rel="noopener noreferrer" class="text-white"><i class="fab fa-github fa-stack-1x"></i></a> 
                       
                    </span> 
                  </span> 
      
                  <span class="icon is-large">
                    <span class="fa-stack fa-lg"> 
                    
                      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" class="text-white"><i class="fab fa-linkedin fa-stack-1x has-text-white"></i></a>
                    </span> 
                  </span> 
      
                  <span class="icon is-large"> 
                    <span class="fa-stack fa-lg"> 
                       
                      <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer" class="text-white"><i class="fas fa-envelope fa-stack-1x has-text-white"></i></a>
                    </span> 
                  </span> 
      
                  <span class="icon is-large"> 
                    <span class="fa-stack fa-lg"> 
                       
                      <a href="https://www.medium.com/@ranjan.das" target="_blank" rel="noopener noreferrer" class="text-white"><i class="fab fa-medium fa-stack-1x has-text-white"></i></a>
                    </span> 
                  </span> 
      
                  <span class="icon is-large"> 
                    <span class="fa-stack fa-lg"> 
                       
                      <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer" class="text-white"><i class="fas fa-paper-plane fa-stack-1x has-text-white"></i></a>
                    </span> 
                  </span> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div>
      </div>
      
      <div class="text-center p-3" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
        © 2020 Copyright :&nbsp;&nbsp;
        <a class="text-white" href="https://github.com/Ranjan-Das-cloud">Ranjan-Das-cloud</a><span>&nbsp;&nbsp;<i class="fas fa-chess-king"></i></span>
      </div>
      
    </footer>
  );
};

export default Footer;
