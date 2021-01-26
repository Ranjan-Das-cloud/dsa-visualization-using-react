import React, { forwardRef, HTMLAttributes } from "react";
import { Text } from "@react-md/typography";

export default forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function PageB6(props, ref) {
    return (
      <div {...props} ref={ref} className="mt-3 mb-1">
        <Text type="headline-4">Source code in C</Text>
        <Text>
          <code>
          <div className="container text-left offset-4"><h5 className="mt-5 mb-4"><span><h4 className="text-success"><b>Recursive</b> implementation of Binary Search</h4></span>
          </h5>
          
          <h5>

          </h5>
          </div>
          </code>
        </Text>
      </div>
    );
  }
);