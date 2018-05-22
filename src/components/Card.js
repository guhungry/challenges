import React, { PureComponent } from 'react';
import { Container, BackgroundImage, ContainerInfo, Overlay, ButtonClose } from './Card.Components'

import PropTypes from 'prop-types'

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
        <div style={{textAlign: 'center'}}>
          <div>Select the amount to donate (USD)</div>
          <div>{ payments }</div>
          <button onClick={onPay.call(this, item.id, selectedAmount, item.currency)}>Pay</button>
        </div>
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