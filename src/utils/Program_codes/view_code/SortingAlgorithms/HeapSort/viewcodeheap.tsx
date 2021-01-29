import React, { FC } from "react";
import { Divider } from "@react-md/divider";
import { Text } from "@react-md/typography";

import CrossFadeExamplesAsyncHeap from "./CrossFadeElementHeap";
//import CrossFadeExamplesStatic from "./CrossFadeExamplesStatic";

const ViewcodeHeap: FC = () => (
  <>
    <Text type="headline-6" margin="bottom">
      <div className="mt-1"></div>
      Code Explorer
    </Text>
    
    <Divider />
    <Text type="headline-6">
      <span className="text-info">Source/Program codes in multiple </span><code>Programming Languages</code>
    </Text>
    <CrossFadeExamplesAsyncHeap />
    <Divider />
  </>
);

export default ViewcodeHeap;