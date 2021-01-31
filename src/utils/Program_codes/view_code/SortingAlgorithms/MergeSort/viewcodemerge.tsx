import React, { FC } from "react";
import { Divider } from "@react-md/divider";
import { Text } from "@react-md/typography";

import CrossFadeExamplesAsyncMerge from "./CrossFadeElementMerge";
//import CrossFadeExamplesStatic from "./CrossFadeExamplesStatic";

const ViewcodeMerge: FC = () => (
  <>
    <Text type="headline-6" margin="bottom">
      <div className="mt-1"></div>
      Code Explorer
    </Text>
    
    <Divider />
    <Text type="headline-6">
      <span className="text-info">Source/Program codes in multiple </span><code>Programming Languages</code>
    </Text>
    <CrossFadeExamplesAsyncMerge />
    <Divider />
  </>
);

export default ViewcodeMerge;