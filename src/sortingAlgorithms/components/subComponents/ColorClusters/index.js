import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ColorKey = ({ clusterA, clusterB, clusterC, clusterD }) => {
  const keySorted =
    clusterA || clusterB || clusterC || clusterD ? (
      <div className="Item_Color">
        <div className="Color_Box Sorted_Color"></div>
        <span>Sorted</span>
      </div>
    ) : (
      <div className="Item_Color">
        <div className="Color_Box Unsorted_Color"></div>
        <span>Unsorted</span>
      </div>
    );

  const keyA = clusterA ? (
    <div className="Item_Color">
      <div className="Color_Box Color__clusterA"></div>
      <span>{clusterA}</span>
    </div>
  ) : null;

  const keyB = clusterB ? (
    <div className="Item_Color">
      <div className="Color_Box Color__clusterB"></div>
      <span>{clusterB}</span>
    </div>
  ) : null;

  const keyC = clusterC ? (
    <div className="Item_Color">
      <div className="Color_Box Color__clusterC"></div>
      <span>{clusterC}</span>
    </div>
  ) : null;

  const keyD = clusterD ? (
    <div className="Item_Color">
      <div className="Color_Box Color__clusterD"></div>
      <span>{clusterD}</span>
    </div>
  ) : null;

  return (
    <div className="ColorKey">
      {keySorted}
      {keyA}
      {keyB}
      {keyC}
      {keyD}
    </div>
  );
};

ColorKey.propTypes = {
  clusterA: PropTypes.string,
  clusterB: PropTypes.string,
  clusterC: PropTypes.string,
  clusterD: PropTypes.string
};

export default ColorKey;
