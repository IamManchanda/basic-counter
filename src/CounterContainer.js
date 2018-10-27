import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterContainer extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((state) => {
      if (state.count >= 5) return undefined;
      return {
        count: state.count + 1,
      };
    }, () => {
      console.log(this.state);
    });
  };

  handleDecrement = () => {
    this.setState((state) => {
      if (state.count <= 0) return undefined;
      return {
        count: state.count - 1,
      };
    }, () => {
      console.log(this.state);
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { count } = this.state;
    const { handleIncrement, handleDecrement, handleReset } = this;
    return (
      <Counter
        count={ count }
        handleIncrement={ handleIncrement }
        handleDecrement={ handleDecrement }
        handleReset={ handleReset }
      />
    );
  }
}

