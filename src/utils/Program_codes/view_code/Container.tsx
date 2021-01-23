import React, { forwardRef, HTMLAttributes, ReactNode } from "react";

import cn from "classnames";

//import styles from "../../sortingAlgorithms/__colorHub/scss/Container.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default forwardRef<HTMLDivElement, Props>(function Container(
  { children, className, ...props },
  ref
) {
  return (
    <div {...props} className={cn(className)} ref={ref}>
      {children}
    </div>
  );
});