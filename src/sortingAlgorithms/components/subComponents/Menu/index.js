import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

// Sub components
import Background from '../../elementalComponents/Background';

import {
  KeyboardArrowDownSVGIcon as ArrowDown,
  KeyboardArrowUpSVGIcon as ArrowUp
} from '@react-md/material-icons';

import Button from '../../elementalComponents/Button';

//Conditionally applying inline styles and Classes or Action
/* When using inline styles or classes or action, we might also want to apply or remove styles or classes or action based on the state of the component. 
We can easily add conditional styles using the ternary operator.
*/

const MenuList = ({ open, items, onSelect }) => {
  return open ? (
    <ul className="Menu__List">
      {items.map((item, i) => (
        <li
          key={`${item}_${i}`}
          onClick={(evt) => {
            onSelect(evt, item);
          }}
          className="Menu__Item"
        >
          {item}
        </li>
      ))}
    </ul>
  ) : null;
};

class Menu extends Component {
  state = {
    open: this.props.open || false
  };

  close = (evt) => {
    evt.preventDefault();
    this.setState({ open: false });
  };

  toggle = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    const {
      className,
      selected,
      onSelect,
      placeholder,
      items,
      noDropIcon
    } = this.props;

    return (
      <div>
        <Background show={this.state.open} onClick={this.close} />
        <div className={`Menu ${className}`}>
          <header className="Menu__Header">
            {noDropIcon ? (
              <Button
                onClick={this.toggle}
                notCased
                className={selected ? null : 'Menu__Placeholder'}
              >
                {selected ? selected : placeholder}
              </Button>
            ) : (
              <div
                className={
                  selected ? 'Menu__SelectedItem' : 'Menu__Placeholder'
                }
              >
                {selected ? selected : placeholder}
              </div>
            )}
            {noDropIcon ? null : (
              <Button
                icon={this.state.open ? ArrowUp : ArrowDown}
                onClick={this.toggle}
              />
            )}
          </header>
          <MenuList
            open={this.state.open}
            items={items}
            onSelect={(evt, item) => {
              onSelect(item);
              this.close(evt);
            }}
          />
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  noDropIcon: PropTypes.bool
};

export default Menu;
