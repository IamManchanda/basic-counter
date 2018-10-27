import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleReset } = this.props;
    return (
      <section className="Counter">
        <h1>Count: { count  }</h1>
        <button onClick={ handleIncrement } className="full-width">Increment</button>
        <button onClick={ handleDecrement } className="full-width">Decrement</button>
        <button onClick={ handleReset } className="full-width">Reset</button>
      </section>
    );
  }
}
