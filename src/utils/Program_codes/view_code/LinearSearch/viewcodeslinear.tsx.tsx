import React, { FC } from "react";
import { Divider } from "@react-md/divider";
import { Text } from "@react-md/typography";

import CrossFadeExamplesAsync from "./CrossFadeElementAsyncLinear";
//import CrossFadeExamplesStatic from "./CrossFadeExamplesStatic";

const Viewcodes: FC = () => (
  <>
    <Text type="headline-6" margin="bottom">
      Static Transitions
    </Text>
    
    <Divider />
    <Text type="headline-6">
      Async with <code>Suspense</code>
    </Text>
    <CrossFadeExamplesAsync />
    <Divider />
  </>
);

export default Viewcodes;