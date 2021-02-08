import React from "react";

import { randomIntFromInterval } from "../../utils/randomIntGenerator.js";
import { binarySearchAnimations } from "./../searchingAlgorithms";

import Header from "./../../utils/header";
import ArrayBlock from "./../ArrayBlock";

import SideBar from "../../utils/sidebar";

//Stylesheets
import "./binarySearch.css";
import '../../sortingAlgorithms/__colorHub/codestyle.css';
import { Configuration } from "react-md";
import Binary from "../../utils/Program_codes/view_code/BinarySearch/togglerbinary.tsx";

const NUMBER_OF_ARRAY_BARS = 15;
const DEFAULT_COLOR = "#6376f1";
const FOUND_COLOR = "#28B463";
const NOT_FOUND_COLOR = "#F16388";
const ANIMATION_SPEED_SECONDS = 3;

export default class BinarySearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            found: false,
            disabled: false,
            elementFoundAt: 0,
            target: null,
            msgAfterExecution: null,
            msg: null,
            previousLength: 0,
            animations: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        let array = [];
        const prevArray = document.getElementsByClassName("b-array-bar");
        document.getElementById("binarySearchTargetVal").value = "";
        for (let idx = 0; idx < prevArray.length; idx++) {
            prevArray[idx].style.backgroundColor = DEFAULT_COLOR;
            prevArray[idx].classList.remove("growFind");
            prevArray[idx].classList.remove("highlight");
        }
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 850));
        }
        let sortedArray = array.slice().sort((a, b) => a - b);
        this.setState({
            array: sortedArray,
            found: false,
            disabled: false,
            msgAfterExecution: null,
            msg: null,
            previousLength: this.state.animations.length,
        });
    }

    hightlightWithinBounds(start, end, ArrayBlocks) {
        for (let i = start; i <= end; i++) {
            ArrayBlocks[i].style.backgroundColor = NOT_FOUND_COLOR;
            ArrayBlocks[i].style.transition = "100ms all";
        }
    }

    resetAllTiles(ArrayBlocks) {
        for (let i = 0; i < ArrayBlocks.length; i++) {
            ArrayBlocks[i].style.backgroundColor = DEFAULT_COLOR;
            ArrayBlocks[i].style.transition = "100ms all";
        }
    }

    binarySearch() {
        //var msgAfterExecution = "";
        const { array } = this.state;
        const animations = [];
        let count = 0;
        let counter = 0;
        const ArrayBlocks = document.getElementsByClassName("b-array-bar");
        const target = document.getElementById("binarySearchTargetVal").value;
        if (target === "") return;

        binarySearchAnimations(
            array,
            0,
            array.length - 1,
            parseInt(target),
            animations
        );

        for (let k = 0; k < animations.length; k++) {
            const [left, right, mid, found] = animations[k];
            count++;

            if (k === animations.length - 1 && found) {
                setTimeout(() => {
                    console.log("Found !!!");
                    counter++;
                    //msg = `${target} Element has been found !!`;
                    this.setState({ disabled: true, msgAfterExecution: `${target} Element has been found !!`, msg: '', found: true });
                    this.resetAllTiles(ArrayBlocks);
                    ArrayBlocks[mid].classList.add("highlight");
                    ArrayBlocks[mid].style.backgroundColor = FOUND_COLOR;
                }, (k + 1) * ANIMATION_SPEED_SECONDS * 1000);
            }

            
            
            if ((left === 0 && right === 0 && mid === 0) && !found) {
                setTimeout(() => {
                    console.log("ELement not found");
                    //msg = `Element ${target} not found`
                    this.setState({
                        disabled: true,
                        msg: `Element ${target} not found`,
                        found: false,
                    });
                    this.resetAllTiles(ArrayBlocks);
                }, (k + 1) * ANIMATION_SPEED_SECONDS * 1000);
            }

            setTimeout(() => {
                this.setState({ disabled: true });
                this.resetAllTiles(ArrayBlocks);
                this.hightlightWithinBounds(left, right, ArrayBlocks);
            }, k * 1000 * ANIMATION_SPEED_SECONDS);
        }

        setTimeout(() => {
            this.setState({ disabled: false, msg: `Element ${target} not found` });
            if(counter === 0 && count=== 4){
                alert("Element Not Found here !!!");
            }
            //setTimeout(() => {this.resetArray()}, 5000);
        }, count * 1000 * ANIMATION_SPEED_SECONDS);
    }

    render() {
        const { array, found, disabled, msgAfterExecution, msg } = this.state;

        return (
            <div>
                <SideBar />
                <div className="jumbotron jumbotron-fluid bg-cover bg-light">
                    <center>
                        <Header title="Binary Search" />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="input-group col-sm-10">
                                    <input
                                        type="number"
                                        id="binarySearchTargetVal"
                                        className="form-control teaxt-md-center"
                                        placeholder="--- Enter an element to find ---"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            onClick={() => this.binarySearch()}
                                            className="btn rounded-bottom btn-success"
                                            type="button"
                                            id="binarySearchBtn"
                                            disabled={disabled}
                                        >
                                            Search
                                        </button>
                                        <button
                                            onClick={() => this.resetArray()}
                                            className="btn rounded-bottom btn-danger"
                                            id="binarySearchResetArray"
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
                        <div className="container">
                        {!found ? (
                            <b><h4><p className="not-found text-white">{msg}</p></h4></b>
                        ) : null}
                        {found ? (
                            <b><p className="found">{msgAfterExecution}</p></b>
                        ) : null}
                        </div>
                        <br />
                        <div className="container">
                            {array.map((value, idx) => (
                                <ArrayBlock
                                    type={"binarySearch"}
                                    key={idx}
                                    idx={idx}
                                    val={value}
                                />
                            ))}
                        </div>
                    </center>
                </div>
                <div className="row mt-3 col-lock mb-5 text-center">
                    <Configuration>
                        <Binary />
                    </Configuration>
                </div>
            </div>
        );
    }
}
