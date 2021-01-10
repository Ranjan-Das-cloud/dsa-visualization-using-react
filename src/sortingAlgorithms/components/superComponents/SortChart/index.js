import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Bar from '../../elementalComponents/Bar';

const getListOfBars = (
  numbers,
  maxNum,
  clusterA,
  clusterB,
  clusterC,
  clusterD,
  sortedIndices
) => {
  return numbers.map((num, i) => {
    let width = 100 / numbers.length;
    let height = (num / maxNum) * 100;
    let stateA = clusterA.includes(i);
    let stateB = clusterB.includes(i);
    let stateC = clusterC.includes(i);
    let stateD = clusterD.includes(i);
    let sorted = sortedIndices.includes(i);

    let margin =
      i === numbers.length ? '0' : width > 3 ? '0.5rem' : '0.125rem';
    return (
      <Bar
        key={`${i}_${num}`}
        width={width}
        height={height}
        val={width > 4 ? num : null}
        stateA={stateA}
        stateB={stateB}
        stateC={stateC}
        stateD={stateD}
        sorted={sorted}
        style={{ marginRight: `${margin}` }}
      />
    );
  });
};

const SortChart = ({
  numbers,
  maxNum,
  clusterA,
  clusterB,
  clusterC,
  clusterD,
  sortedIndices
}) => {
  return (
    <div className="SortChart">
      {getListOfBars(
        numbers,
        maxNum,
        clusterA,
        clusterB,
        clusterC,
        clusterD,
        sortedIndices
      )}
    </div>
  );
};

SortChart.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  maxNum: PropTypes.number,
  clusterA: PropTypes.arrayOf(PropTypes.number),
  clusterB: PropTypes.arrayOf(PropTypes.number),
  clusterC: PropTypes.arrayOf(PropTypes.number),
  clusterD: PropTypes.arrayOf(PropTypes.number),
  sortedIndices: PropTypes.arrayOf(PropTypes.number)
};

export default SortChart;
