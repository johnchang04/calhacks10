import React, { Component } from 'react';
import './boxstyles.css'

class SelectableBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }
  


  toggleSelection = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { selected } = this.state;
    const { label } = this.props;

    return (
      <div
        className={`selectable-box ${selected ? 'selected' : ''}`}
        onClick={this.toggleSelection}
      >
        {label}
      </div>
    );
  }
}

export default SelectableBox;