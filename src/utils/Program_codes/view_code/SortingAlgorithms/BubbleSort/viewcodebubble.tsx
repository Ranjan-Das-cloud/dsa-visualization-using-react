import React, { FC } from "react";
import { Divider } from "@react-md/divider";
import { Text } from "@react-md/typography";

import CrossFadeExamplesAsyncBubble from "./CrossFadeElementBubble";
//import CrossFadeExamplesStatic from "./CrossFadeExamplesStatic";

const ViewcodeBubble: FC = () => (
  <>
    <Text type="headline-6" margin="bottom">
      <div className="mt-1"></div>
      Code Explorer
    </Text>
    
    <Divider />
    <Text type="headline-6">
      <span className="text-info">Source/Program codes in multiple </span><code>Programming Languages</code>
    </Text>
    <CrossFadeExamplesAsyncBubble />
    <Divider />
  </>
);

export default ViewcodeBubble;