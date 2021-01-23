import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SortInfo = ({
  title,
  description,
  worstCase,
  avgCase,
  bestCase,
  space
}) => {
  return (
    <div className="SortInfo">
      <hr />
      <h1><i class="cil-mood-very-good"></i>&nbsp;{title ? title : 'Select Algorithm'}</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo_desc">
          {description ? (
            description
          ) : (
            <p>
              <span><i class="cil-sad"></i>&nbsp;</span>You have to select an algorithm before you can visualize it's behavioral execution over an array.
            </p>
          )}
        </article>

        <aside className="SortInfo__right">
          <h3><span><i class="cil-graph"></i>&nbsp;</span>Algorithm Performance</h3>
          <table>
            <tbody>
              <tr>
                <td><span><i class="cil-chart-line"></i>&nbsp;</span>Worst-case time complexity</td>
                <td>
                  <code>{worstCase}</code>
                </td>
              </tr>

              <tr>
                <td><span><i class="cil-chart-line"></i>&nbsp;</span>Average time complexity</td>
                <td>
                  <code>{avgCase}</code>
                </td>
              </tr>

              <tr>
                <td><span><i class="cil-chart-line"></i>&nbsp;</span>Best-case time complexity</td>
                <td>
                  <code>{bestCase}</code>
                </td>
              </tr>

              <tr>
                <td><span><i class="cis-chart-area"></i>&nbsp;</span>Worst-case space complexity</td>
                <td>
                  <code>{space}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
};

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  worstCase: PropTypes.object,
  avgCase: PropTypes.object,
  bestCase: PropTypes.object,
  space: PropTypes.object
};

export default SortInfo;
