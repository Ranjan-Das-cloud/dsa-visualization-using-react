import React from 'react';
import './style.css';

import Button from '../../elementalComponents/Button';
import { VscMenu as Menu, VscClose as Close } from 'react-icons/vsc';

const TopBar = ({ drawerOpen, toggleDrawer, children }) => {
  return (
    <header className="TopBar">
      <div className="TopBar__Row">
        <section className="TopBar__Section">
          <Button
            icon={drawerOpen ? Close : Menu}
            className="TopBar__MenuButton"
            iconClass="TopBar__Icon"
            onClick={toggleDrawer}
          />
          <span className="TopBar__Title"><i class="cis-badge bg-success"></i>&nbsp;&nbsp;All-sort-in-one Visualizer</span>
        </section>
        <section className="TopBar__Section TopBar__Section_align_end">
          {children}
        </section>
      </div>
    </header>
  );
};

export default TopBar;
