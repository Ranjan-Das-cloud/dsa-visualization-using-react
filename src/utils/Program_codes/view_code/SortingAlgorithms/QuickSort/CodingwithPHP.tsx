import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";
import { MDBBtn } from "mdbreact";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageQ6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in PHP</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 style={{color:'#f0ffff'}}>Implementation of Quick Sort</h4></span>
              <div className="container text-left">
                <div className="offset-3 mt-4 mb-5">
                <h5>Press button for source code of Quick Sort in PHP</h5>
                </div>
              </div>
            </h5><br></br>
              <div className="text-center text-white font-weight-bold"><h5>
                |'|<br></br>| |<br></br>__| |__<br></br>\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br></br>\&nbsp;&nbsp;&nbsp;&nbsp;/<br></br>\/<br></br>
                </h5>
              </div>
            <div className="text-center"><span><a className="text-white" rel="noreferrer noopener" href="https://gist.githubusercontent.com/wangshijun/3552889/raw/7fcae3973bc8cf3ad282a093e40a685073f6f5d2/quicksort.php" target="_self"><MDBBtn className="btn-primary">Click Me for source code</MDBBtn></a></span></div>
          </code>
        </Text>
      </div>
    );
  }
);