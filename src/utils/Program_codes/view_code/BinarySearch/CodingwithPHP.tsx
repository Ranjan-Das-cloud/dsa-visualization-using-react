import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in PHP</Text>
        <Text>
          <code>
            <h5 className="mt-5 mb-4"><span><h4 className="text-success"><b>Recursive</b> implementation of Binary Search</h4></span>
              <div className="container text-left offset-4">
                <div className="offset-3 mt-4 mb-5">

                </div>
              </div>
            </h5>
            
            <h5>
              <div className="container text-left offset-4">
                <div className="offset-3 mt-4 mb-5">

                </div>
              </div>
            </h5>
          </code>
        </Text>
      </div>
    );
  }
);