import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

export default class Card extends PureComponent {
  static propTypes = {
    item: PropTypes.object,
    onPay: PropTypes.func
  }

  state = { selectedAmount: 0 };

  render () {
    const { item, onPay } = this.props
    const { selectedAmount } = this.state
    const payments = [10, 20, 50, 100, 500].map((amount, j) => this.renderPayment(j, amount));

    return (
      <Container>
        <img src={`/images/${item.image}`} />
        <p>{item.name}</p>
        { false && payments}
        <button onClick={onPay.call(this, item.id, selectedAmount, item.currency)}>Pay</button>
      </Container>);
  }

  renderPayment = (key, amount) => (
    <label key={key}>
      <input type="radio" name="payment" onClick={this.setAmount(amount)} /> {amount}
    </label>
  )

  setAmount = amount => () => this.setState({ selectedAmount: amount })
}