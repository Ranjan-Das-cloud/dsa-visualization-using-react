import React, { FC } from "react";
import { Divider } from "@react-md/divider";
import { Text } from "@react-md/typography";

import CrossFadeExamplesAsyncQuick from "./CrossFadeElementQuick";
//import CrossFadeExamplesStatic from "./CrossFadeExamplesStatic";

const ViewcodeQuick: FC = () => (
  <>
    <Text type="headline-6" margin="bottom">
      <div className="mt-1"></div>
      Code Explorer
    </Text>
    
    <Divider />
    <Text type="headline-6">
      <span className="text-info">Source/Program codes in multiple </span><code>Programming Languages</code>
    </Text>
    <CrossFadeExamplesAsyncQuick />
    <Divider />
  </>
);

export default ViewcodeQuick;