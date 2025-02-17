import React from "react";

const ArrayBlock = ({ idx, val, type }) =>
    type === "binarySearch" ? (
        <div className="b-array-bar">
            {`${val}`}
            <br />
            <span>{`${idx}`}</span>
        </div>
    ) : (
        <div className="l-array-bar">
            {`${val}`}
            <br />
            <span>{`${idx}`}</span>
        </div>
    );

export default ArrayBlock;
