import React, { PureComponent } from 'react';
import Button from './Button'
import { Container, BackgroundImage, ContainerInfo, Overlay, ButtonClose, ContainerPopup, ContainerOption } from './Card.Components'

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
          <Button onClick={this.setShowPayment(true)} title='Donate' />
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
        <ContainerPopup>
          <div>Select the amount to donate ({item.currency})</div>
          <ContainerOption>{ payments }</ContainerOption>
          <Button onClick={onPay(item.id, selectedAmount, item.currency)} title='Pay' />
        </ContainerPopup>
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