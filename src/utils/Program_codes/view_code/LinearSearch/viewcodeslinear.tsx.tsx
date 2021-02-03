import React, { FC } from "react";
import { Divider } from "@react-md/divider";
import { Text } from "@react-md/typography";

import CrossFadeExamplesAsync from "./CrossFadeElementAsyncLinear";
//import CrossFadeExamplesStatic from "./CrossFadeExamplesStatic";

import '../../../../sortingAlgorithms/__colorHub/codestyle.css';

const Viewcodes: FC = () => (
  <>
    <Text type="headline-6" margin="bottom">
      <div className="mt-1"></div>
      <h3 className="text-white bg-primary badge font-bold mt-2">Code Explorer</h3>
    </Text>
    
    <Divider style={{background: ''}} />
    <Text type="headline-6">
    <span className="text-info badge bg-white font-sub-heading">Source/Program codes in multiple&nbsp;<span className="text-danger">Programming Languages</span></span>
    </Text>
    <CrossFadeExamplesAsync />
    <Divider />
  </>
);

export default Viewcodes;