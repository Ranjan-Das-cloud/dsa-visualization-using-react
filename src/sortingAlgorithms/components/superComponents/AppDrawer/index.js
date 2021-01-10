import React, { Fragment } from 'react';
import './style.css';

import Background from '../../elementalComponents/Background';

const AppDrawer = ({ open, children, closeDrawer }) => {
  let className = 'AppDrawer';
  className += open ? ` AppDrawer_open` : ` AppDrawer_closed`;
  return (
    <Fragment>
      <div className={className}>
        <div className="AppDrawer_Content">{children}</div>
      </div>
      <Background show={open} onClick={closeDrawer} />
    </Fragment>
  );
};

export default AppDrawer;
