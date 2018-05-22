import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;
const BackgroundImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  padding-bottom: ${100*(3/4)}%;
`;
const ContainerInfo = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
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
        <BackgroundImage src={`/images/${item.image}`} />
        <ContainerInfo>
          <p>{item.name}</p>
          <button onClick={onPay.call(this, item.id, selectedAmount, item.currency)}>Pay</button>
        </ContainerInfo>
        { false && payments}
      </Container>);
  }

  renderPayment = (key, amount) => (
    <label key={key}>
      <input type="radio" name="payment" onClick={this.setAmount(amount)} /> {amount}
    </label>
  )

  setAmount = amount => () => this.setState({ selectedAmount: amount })
}