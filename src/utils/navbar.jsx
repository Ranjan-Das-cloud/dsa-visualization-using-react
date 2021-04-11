import React from "react";

// For installing Fontawesome @5.0.0 the latest one, run the command** -- "npm install --save @fortawesome/fontawesome-free"


const NavBar = () => (
    <div className="bg-dark py-2 px-2">
        <span>
            <a className="btn-sm text-decoration-none bg-secondary rounded text-light" href="https://github.com/Ranjan-Das-cloud/dsa-visualization-using-react">
                <i className="fab text-light fa-github"></i>&nbsp; Source Code
            </a>
            <a className="btn-sm text-decoration-none bg-primary rounded float-right text-light" href="https://linkedin.com/in/">
                <i className="fab text-light fa-linkedin"></i>
                &nbsp; Demonstrated by Ranjan Das
            </a>
        </span>
    </div>
);

export default NavBar;
