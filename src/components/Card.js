import React, { PureComponent } from 'react';
import Button from './Button'
import RadioButton from './RadioButton'
import ResponsiveItem from './ResponsiveItem'
import { Container, BackgroundImage, ContainerInfo, Overlay, ButtonClose, ContainerPopup, ContainerOption } from './Card.Components'

import PropTypes from 'prop-types'

export default class Card extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onPay: PropTypes.func.isRequired
  }

  state = { selectedAmount: 10, showPayment: false };

  // ////////////////
  // Render Functions
  // ////////////////
  render () {
    const { item } = this.props
    const { showPayment } = this.state

    return (
      <ResponsiveItem sizeXs={12} sizeSm={6}>
        <Container>
          <BackgroundImage src={`/images/${item.image}`} />
          <ContainerInfo>
            <p>{item.name}</p>
            <Button onClick={this.setShowPayment(true)} title='Donate' />
          </ContainerInfo>
          { showPayment && this.renderPaymentOverlay()}
        </Container>
      </ResponsiveItem>
    );
  }

  renderPaymentOverlay = () => {
    const { item, onPay } = this.props
    const { selectedAmount } = this.state
    const payments = [10, 20, 50, 100, 500].map(this.renderPayment(item.id, selectedAmount));

    return (
      <Overlay>
        <ButtonClose onClick={this.setShowPayment(false)} title='x' />
        <ContainerPopup>
          <div>Select the amount to donate ({item.currency})</div>
          <ContainerOption>{ payments }</ContainerOption>
          <Button disabled={selectedAmount <= 0} onClick={onPay(item.id, selectedAmount, item.currency)} title='Pay' />
        </ContainerPopup>
      </Overlay>
    )
  }

  renderPayment = (id, selectedAmount) => (amount, key) => <RadioButton key={key} name={`name[${id}]`} checked={selectedAmount === amount} onChange={this.setAmount(amount)} title={amount} />

  // ////////////////
  // Helper Functions
  // ////////////////
  setAmount = selectedAmount => () => this.setState({ selectedAmount })
  setShowPayment = showPayment => () => this.setState({ showPayment })
}