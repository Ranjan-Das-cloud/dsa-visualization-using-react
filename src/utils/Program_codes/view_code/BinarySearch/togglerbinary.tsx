import React, { FC, useState } from "react";
import { Button } from "@react-md/button";
import { useCSSTransition } from "@react-md/transition";

//import Page1 from "./Page1";
import styles from "./UseCSSTransition.module.scss";
import '../../../../sortingAlgorithms/__colorHub/codestyle.css';

import { ExpandMoreSVGIcon, StorageSVGIcon, TextIconSpacing } from "react-md";
import ViewcodesBinary from "./viewcodesbinary";

const Binary: FC = () => {
  const [transitionIn, setTransitionIn] = useState(false);
  const [rendered, transitionProps] = useCSSTransition({
    // changing this value causes the transition behavior to change
    transitionIn,

    // 5 seconds just for demo purposes... can also be an object
    timeout: 5000,

    // can also use a string that gets BEM-ified instead
    classNames: {
      enter: styles.enter,
      enterActive: styles.entering,
      exit: styles.exit,
      exitActive: styles.exiting,
    },

    // can also trigger the css transition on initial mount
    // appear: false,

    // changes the `rendered` value to be false while not transitioning and
    // `transitionIn` is false
    temporary: true,

    // an optional className to merge with the transition classNames
    // className: "",
  });

  return (
    <>
      <Button className="text-white waves waves-effect waves-dark" theme="error" themeType="contained" onClick={() => setTransitionIn(!transitionIn)}>
        <TextIconSpacing icon={<StorageSVGIcon />}>
          <TextIconSpacing icon={<ExpandMoreSVGIcon />} iconAfter>
            Expand Codes
          </TextIconSpacing>
        </TextIconSpacing>
      </Button>
      {rendered && <div {...transitionProps}><ViewcodesBinary /></div>}
    </>
  );
};

export default Binary;