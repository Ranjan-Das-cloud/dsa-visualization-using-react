import React from 'react';

//  import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center text-lg-start Footer">
  
      <div className="container p-4">
        
        <div className="row">

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">

            <h4 className="text-uppercase">About Me</h4>

            <h5 className="mb-2">
              <p>
              I am a modest learner with several extraordinary skills.
              Currently, I'm studying B.Tech. at Techno Main Salt Lake.
              I love to listen to songs, develop blogs and play games, learning new projects, watching specially horror movies.
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
            </h5>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="text-uppercase">Resources</h4>

            <ul className="list-unstyled mb-2">
              <li>
                <h5><a href="https://www.geeksforgeeks.org/sorting-algorithms/" rel="noopener noreferrer" target="_blank" className="Footer__Link text-white">GeekforGeeks</a></h5>
              </li>
              <li>
                <h5><a href="https://www.programiz.com/dsa/bubble-sort" rel="noopener noreferrer" target="_blank" className="Footer__Link text-white">Programiz</a></h5>
              </li>
              <li>
                <h5><a href="https://www.javatpoint.com/data-structure-tutorial" rel="noopener noreferrer" target="_blank" className="Footer__Link text-white">Javatpoint</a></h5>
              </li>
              <li>
                <h5><a href="https://www.codeacademy.com" rel="noopener noreferrer" target="_blank" className="Footer__Link text-white">Codeacademy</a></h5>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="text-uppercase">Code Editors</h4>

            <ul className="list-unstyled mb-2">
              <li>
                <h5><i class="cib-hackerrank"></i>&nbsp;<a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" className="Footer__Link text-white">HackerRank</a></h5>
              </li>
              <li>
                <h5><i class="cib-hackerearth"></i>&nbsp;<a href="https://www.hackerearth.com" target="_blank" rel="noopener noreferrer" className="Footer__Link text-white">HackerEarth</a></h5>
              </li>
              <li>
                <h5><i class="cib-leetcode"></i>&nbsp;<a href="https://www.leetcode.com" target="_blank" rel="noopener noreferrer" className="Footer__Link text-white">LeetCode</a></h5>
              </li>
              <li>
                <h5><i class="cib-codepen"></i>&nbsp;<a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="Footer__Link text-white">CodePen</a></h5>
              </li>
            </ul>
          </div>
          
        </div>
        
      </div>

      <div className="mt-5">
          <div className='container has-text-centered'> 
          <div className='columns is-mobile is-centered'> 
            <div className='column is-5'> 
              <div> 
                <h1 className='title has-text-centered'> 
                    Contact Me 
                </h1> 
              </div> 
      
              <div class='box'> 
                <div> 
                  <span class="icon is-large"> 
                    <span class="fa-stack fa-lg"> 
                      <a href="https://github.com/Ranjan-Das-cloud" target="_blank" rel="noopener noreferrer" className="text-white"><i class="fab fa-github fa-stack-1x"></i></a> 
                       
                    </span> 
                  </span> 
      
                  <span class="icon is-large">
                    <span class="fa-stack fa-lg"> 
                    
                      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover-me text-white"><i class="fab fa-linkedin fa-stack-1x has-text-white"></i></a>
                    </span> 
                  </span> 
      
                  <span class="icon is-large"> 
                    <span class="fa-stack fa-lg"> 
                       
                      <a href="mailto:ranjan.rd170@gmail.com" target="_blank" rel="noopener noreferrer" className="hover-me text-white"><i class="fas fa-envelope fa-stack-1x has-text-white"></i></a>
                    </span> 
                  </span> 
      
                  <span class="icon is-large"> 
                    <span class="fa-stack fa-lg"> 
                       
                      <a href="https://www.medium.com/@ranjan.das" target="_blank" rel="noopener noreferrer" className="hover-me text-white"><i class="fab fa-medium fa-stack-1x has-text-white"></i></a>
                    </span> 
                  </span> 
      
                  <span class="icon is-large"> 
                    <span class="fa-stack fa-lg"> 
                      <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer" className="hover-me text-white"><i class="fas fa-paper-plane fa-stack-1x has-text-white"></i></a>
                    </span> 
                  </span> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div>
      </div>
      
      <div className="text-center p-3" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
        © 2020 Copyright :&nbsp;&nbsp;
        <a className="text-white" href="https://github.com/Ranjan-Das-cloud">Ranjan-Das-cloud</a><span>&nbsp;&nbsp;<i className="fas fa-chess-king"></i></span>
      </div>
      
    </footer>
  );
};

export default Footer;
