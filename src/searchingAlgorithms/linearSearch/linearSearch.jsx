import React from "react";
import { randomIntFromInterval } from "../../utils/randomIntGenerator.js";
import { linearSearchAnimations } from "./../searchingAlgorithms";

import Header from "./../../utils/header";
import ArrayBlock from "./../ArrayBlock";

import SideBar from "../../utils/sidebar";

// Stylesheets
import "./linearSearch.css";
import '../../sortingAlgorithms/__colorHub/codestyle.css';
import Demo from "../../utils/Program_codes/view_code/LinearSearch/toggler.tsx";
import { Configuration } from "react-md";

const NUMBER_OF_ARRAY_BARS = 15;
const DEFAULT_COLOR = "#6376f1";
const FOUND_COLOR = "#28B463";
const NOT_FOUND_COLOR = "#F16388";
const ANIMATION_SPEED_SECONDS = 1;

export default class LinearSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            found: false,
            disabled: false,
            elementFoundAt: 0,
            target: null,
            msgAfterExecution: "",
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        const prevArray = document.getElementsByClassName("l-array-bar");
        const found = false;
        const disabled = false;
        document.getElementById("targetVal").value = "";
        for (let idx = 0; idx < prevArray.length; idx++) {
            prevArray[idx].style.backgroundColor = DEFAULT_COLOR;
            prevArray[idx].classList.remove("growFind");
            prevArray[idx].classList.remove("highlight");
        }
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array, found, disabled, msgAfterExecution: "" });
    }

    linearSearch() {
        var msg = "";
        const target = document.getElementById("targetVal").value;
        if (target === "") return;
        const animations = linearSearchAnimations(this.state.array, target);
        console.log(animations);
        let count = 0;

        for (let i = 0; i < animations.length; i++) {
            const [idx, currentEle, found] = animations[i];
            const arrayBars = document.getElementsByClassName("l-array-bar");
            const arrayBar = arrayBars[idx];
            const arrayBarStyle = arrayBar.style;

            count++;

            if (found) {
                msg = `${currentEle} found at index ${idx}`;
                setTimeout(() => {
                    this.setState({
                        found: true,
                        disabled: true,
                        elementFoundAt: idx,
                        target: currentEle,
                    });
                    arrayBarStyle.backgroundColor = FOUND_COLOR;
                    arrayBar.classList.add("growFind");
                    arrayBar.classList.add("highlight");
                }, i * ANIMATION_SPEED_SECONDS * 1000);
                break;
            } else {
                msg = `${target} not found`;
                setTimeout(() => {
                    this.setState({
                        found: false,
                        disabled: true,
                    });
                    arrayBarStyle.backgroundColor = NOT_FOUND_COLOR;
                    arrayBar.classList.add("growFind");
                }, i * ANIMATION_SPEED_SECONDS * 1000);
            }
        }
        setTimeout(() => {
            this.setState({
                disabled: false,
                msgAfterExecution: msg,
            });
        }, (count + 1) * ANIMATION_SPEED_SECONDS * 1000);
    }

    render() {
        const { array, found, disabled, msgAfterExecution } = this.state;

        return (
            <div>
                <SideBar />
                <div className="jumbotron jumbotron-fluid bg-ls-cover bg-light">
                    <center>
                        <Header title="Linear Search" />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="input-group col-sm-10">
                                    <input
                                        type="number"
                                        id="targetVal"
                                        className="form-control"
                                        placeholder="--- Enter an element to find ---"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            onClick={() => this.linearSearch()}
                                            className="btn rounded-bottom btn-success"
                                            type="button"
                                            id="button-addon2"
                                            disabled={disabled}
                                        >
                                            Search
                                        </button>
                                        <button
                                            onClick={() => this.resetArray()}
                                            className="btn rounded-bottom btn-danger"
                                            id="resetArray"
                                            type="button"
                                            disabled={disabled}
                                        >
                                            Generate new Array
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-1 "></div>
                                <span>
                                    <b><h6 className="text-white col-md-7 col-sm-8 col-xl-7 col-10 badge-primary badge-pill mt-1 mb-3">***Please Re-generate the array again to visualize proper result !!</h6></b>
                                </span>
                            </div>
                        </div>
                        <br />
                        {!found ? (
                            <b><p className="not-found growFind col-md-4 col-sm-4 col-4 col-xl-4 text-white">
                                {msgAfterExecution}
                            </p></b>
                        ) : null}
                        {found ? (
                            <b><p className="found growFind col-md-4 col-sm-4 col-4 col-xl-4">
                                {msgAfterExecution}
                            </p></b>
                        ) : null}
                        <div className="container">
                            {array.map((value, idx) => (
                                <ArrayBlock
                                    type={`linearSearch`}
                                    key={idx}
                                    idx={idx}
                                    val={value}
                                />
                            ))}
                        </div>
                    </center>
                </div>
                <div className="row mt-3 col-lock mb-0 text-center">
                    <Configuration>
                        <Demo />
                    </Configuration>
                </div>
            </div>
        );
    }
}
