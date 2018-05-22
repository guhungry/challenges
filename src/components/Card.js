import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  position: relative;
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
const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fffe;
`;
const ButtonClose = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export default class Card extends PureComponent {
  static propTypes = {
    item: PropTypes.object,
    onPay: PropTypes.func
  }

  state = { selectedAmount: 0, showPayment: false };

  render () {
    const { item } = this.props
    const { showPayment } = this.state

    return (
      <Container>
        <BackgroundImage src={`/images/${item.image}`} />
        <ContainerInfo>
          <p>{item.name}</p>
          <button onClick={this.setShowPayment(true)}>Donate</button>
        </ContainerInfo>
        { showPayment && this.renderPaymentOverlay()}
      </Container>);
  }

  renderPaymentOverlay = () => {
    const { item, onPay } = this.props
    const { selectedAmount } = this.state
    const payments = [10, 20, 50, 100, 500].map((amount, j) => this.renderPayment(j, amount));

    return (
      <Overlay>
        <ButtonClose onClick={this.setShowPayment(false)}>X</ButtonClose>
        { payments }
        <button onClick={onPay.call(this, item.id, selectedAmount, item.currency)}>Pay</button>
      </Overlay>
    )
  }

  renderPayment = (key, amount) => (
    <label key={key}>
      <input type="radio" name="payment" onClick={this.setAmount(amount)} /> {amount}
    </label>
  )

  setAmount = selectedAmount => () => this.setState({ selectedAmount })
  setShowPayment = showPayment => () => this.setState({ showPayment })
}