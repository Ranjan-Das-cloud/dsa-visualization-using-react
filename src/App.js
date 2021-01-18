import React from "react";

import NavBar from "./utils/navbar";
import { Route } from "react-router-dom";

//  IndexTable
import IndexTable from "./utils/indexPage";

//  Sorting Visualiser
import SortingVisualizer from "./sortingAlgorithms/sortingVisualizer";

//  Searching Visualiser
import BinarySearch from "./searchingAlgorithms/binarySearch/binarySearch";
import LinearSearch from "./searchingAlgorithms/linearSearch/linearSearch";

//  Stylesheets
import "./App.css";
import Footer from "./sortingAlgorithms/components/subComponents/Footer";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBar />
                <Route exact path="/" component={IndexTable} />
                <Route path="/sorting" component={SortingVisualizer} />
                <Route path="/linear-search" component={LinearSearch} />
                <Route path="/binary-search" component={BinarySearch} />
                <Footer />
            </div>
        );
    }
}
