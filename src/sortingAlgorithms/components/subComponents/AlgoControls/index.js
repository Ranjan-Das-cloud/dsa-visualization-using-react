import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../../elementalComponents/Button';
import Switch from '../../elementalComponents/Switch';
import Menu from '../Menu';

const AppControls = ({
  algorithm,
  onAlgorithmChange,
  onGenerateRandomArray,
  arraySize,
  onArraySizeChange,
  onToggleDarkMode,
  darkMode
}) => {
  return (
    <Fragment>
      <Menu
        placeholder="Sort Algorithm"
        items={[
          'Bubble Sort',
          'Selection Sort',
          'Insertion Sort',
          'Merge Sort',
          'Quick Sort',
          'Heap Sort'
        ]}
        selected={algorithm}
        onSelect={onAlgorithmChange}
      />

      <div className="AppControls__Size">
        <span>Size</span>
        <Menu
          placeholder="Array Size"
          items={['5', '10', '25', '50', '75', '100']}
          selected={String(arraySize)}
          onSelect={onArraySizeChange}
        />
      </div>

      <Button onClick={onGenerateRandomArray}>Randomize</Button>

      <Switch
        label="Dark Mode"
        onSwitch={onToggleDarkMode}
        checked={darkMode}
      />
    </Fragment>
  );
};

AppControls.propTypes = {
  algorithm: PropTypes.string,
  onAlgorithmChange: PropTypes.func.isRequired,
  onGenerateRandomArray: PropTypes.func.isRequired,
  arraySize: PropTypes.number,
  onArraySizeChange: PropTypes.func.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool
};

export default AppControls;
