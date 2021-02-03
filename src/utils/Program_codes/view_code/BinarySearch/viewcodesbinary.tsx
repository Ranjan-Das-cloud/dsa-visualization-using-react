import React, { FC } from "react";
import { Divider } from "@react-md/divider";
import { Text } from "@react-md/typography";

import CrossFadeExamplesAsyncBinary from "./CrossFadeElementAsyncBinary";
//import CrossFadeExamplesStatic from "./CrossFadeExamplesStatic";

import '../../../../sortingAlgorithms/__colorHub/codestyle.css';

const ViewcodesBinary: FC = () => (
  <>
    <Text type="headline-6" margin="bottom">
      <div className="mt-1"></div>
      <h3 className="text-primary bg-white badge font-bold mt-2">Code Explorer</h3>
    </Text>
    
    <Divider />
    <Text type="headline-6">
      <span className="text-info badge bg-white">Source/Program codes in multiple&nbsp;<span className="text-danger">Programming Languages</span></span>
    </Text>
    <CrossFadeExamplesAsyncBinary />
    <Divider />
  </>
);

export default ViewcodesBinary;