import React, { Component } from 'react';
import Card from './components/Card';
import ResponsiveContainer from './components/ResponsiveContainer';
import ResponsiveRow from './components/ResponsiveRow';
import { AppContainer, AppTitle, Message } from './App.Components'

import { connect } from 'react-redux';
import * as api from './services/TamboonApi'
import { donationAmount, summaryDonations } from './utils/helpers';
import DonationAction from './redux/DonationRedux'

class App extends Component {
  state = {
    charities: [],
  }

  // ///////////////////
  // Lifecycle Functions
  // ///////////////////
  componentDidMount() {
    api.charities().then(data => this.setState({ charities: data }));
    api.payments().then(data => this.props.updateTotalDonate(summaryDonations(data.map(donationAmount))))
  }

  // ////////////////
  // Render Functions
  // ////////////////
  render() {
    const { donation: { donate, message } } = this.props;
    const { charities } = this.state

    return (
      <AppContainer>
        <AppTitle>Omise Tamboon React</AppTitle>
        <ResponsiveContainer>
          <p>All donations: {donate}</p>
          <Message>{message}</Message>
          <ResponsiveRow gutterWidth='20px'>{ charities.map(this.renderCharity) }</ResponsiveRow>
        </ResponsiveContainer>
      </AppContainer>
    );
  }

  renderCharity = (item, key) => <Card item={item} key={key} onPay={this.handlePay} />

  // ////////////////
  // Helper Functions
  // ////////////////
  handlePay = (id, amount, currency) => () => {
    api.donate(id, amount, currency)
      .then(() => {
        this.props.updateTotalDonate(amount);
        this.props.updateMessage(`Thanks for donate ${amount}!`);

        setTimeout(() => {
          this.props.updateMessage('');
        }, 2000);
      });
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
  return {
    updateTotalDonate: amount => dispatch(DonationAction.updateTotalDonation(amount)),
    updateMessage: message => dispatch(DonationAction.updateMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
