import React, { FC } from "react";
import { Divider } from "@react-md/divider";
import { Text } from "@react-md/typography";

import CrossFadeExamplesAsyncQuick from "./CrossFadeElementQuick";
//import CrossFadeExamplesStatic from "./CrossFadeExamplesStatic";

import '../../../../../sortingAlgorithms/__colorHub/codestyle.css';

const ViewcodeQuick: FC = () => (
  <>
    <Text type="headline-6" margin="bottom">
      <div className="mt-1"></div>
      <h3 className="text-primary bg-white badge font-bold mt-2">Code Explorer</h3>
    </Text>
    
    <Divider />
    <Text type="headline-6">
      <span className="text-pink badge badge-darkest col-lock badge-pill">Source Program in multiple</span>&nbsp;<span className="text-dark badge badge-pink col-lock badge-pill">Programming Languages</span>
    </Text>
    <CrossFadeExamplesAsyncQuick />
    <Divider />
  </>
);

export default ViewcodeQuick;