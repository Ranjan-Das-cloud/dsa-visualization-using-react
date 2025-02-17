import React from "react";
import { NavLink } from "react-router-dom";

import LinearSearchPoster from "./Route_images/linearsearch.png";
import BinarySearchPoster from "./Route_images/binaryImg-scaled.jpg";
import SortingAlgoPoster from "./Route_images/sorting.jpg";

import MaskedStyleSVG from "./svg/maskShapesNew.svg";

import "./bootstrap.min.css";
import '../sortingAlgorithms/__colorHub/codestyle.css';

const maskStyles = {
    margin: "0 auto",
    textAlign: "center",
    backgroundImage: `url(${MaskedStyleSVG})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    width: "auto",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
};
export default class IndexTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container blackpink mt-2">
                <div className="text-center text-muted">
                    <h1 style={maskStyles} className="maskText mt-1">
                        Data Structure Algorithms
                        <br />
                        Visualizer
                    </h1>
                </div>
                <center>
                    <div className="row mt-5">
                        <div className="col-sm-4 col-12 col-md-4 col-lg-4 col-xl-4">
                            <NavLink to="/sorting">
                                <img
                                    className="img-fluid icon_view fixed-image shadowB"
                                    src={SortingAlgoPoster}
                                    alt="Sorting"
                                />
                                <h5>
                                    <p className="text-white thumb-title badge bg-grad badge-pill bg-rounded font-bold">
                                    <span>
                                        <i class="cil-signal-cellular-4"></i>&nbsp;
                                    </span>
                                        Sorting Visualizer
                                    </p>
                                </h5>
                            </NavLink>
                        </div>
                        <div className="col-sm-4 col-12 col-md-4 col-lg-4 col-xl-4">
                            <NavLink to="/linear-search">
                                <img
                                    className="img-fluid icon_view fixed-image shadowB"
                                    src={LinearSearchPoster}
                                    alt="Linear Search"
                                />
                                <h5>
                                    <p className="text-white thumb-title badge bg-primary badge-pill bg-rounded font-bold">
                                    <span>
                                        <i class="cil-search"></i>&nbsp;
                                    </span>
                                        Linear Search
                                    </p>
                                </h5>
                            </NavLink>
                        </div>
                        <div className="col-sm-4 col-12">
                            <NavLink to="/binary-search">
                                <img
                                    className="img-fluid icon_view fixed-image shadowB"
                                    src={BinarySearchPoster}
                                    alt="Binary Search"
                                />
                                <h5>
                                    <p className="text-white thumb-title badge bg-grad badge-pill bg-rounded font-bold">
                                    <span>
                                        <i class="cil-search"></i>&nbsp;
                                    </span>
                                        Binary Search
                                    </p>
                                </h5>
                            </NavLink>
                        </div>
                    </div>
                    <div className="text-center text-muted end-text mt-5">
                        <h4 className="mb-0 greetings">Have a Great Learning Day!</h4>
                    </div><br></br><br></br>
                </center>
            </div>
        );
    }
}
