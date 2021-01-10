import React from "react";

const NavBar = () => (
    <div className="bg-dark py-2 px-2">
        <span>
            <a className="btn-sm text-decoration-none bg-dark rounded-0 text-light" href="https://github.com/ranjandas/dsa-algorithms-visualiser">
                <i className="fab text-light fa-github"></i>&nbsp; Source Code
            </a>
            <a className="btn-sm text-decoration-none bg-dark rounded-0 text-light" href="https://linkedin.com/in/ranjandas">
                <i className="fab text-light fa-linkedin"></i>
                &nbsp; Demonstrated by Ranjan Das
            </a>
        </span>
    </div>
);

export default NavBar;
