import React, { Component } from 'react';
import Card from './components/Card';
import ResponsiveContainer from './components/ResponsiveContainer';
import ResponsiveRow from './components/ResponsiveRow';

import { connect } from 'react-redux';
import styled from 'styled-components';
import * as api from './services/TamboonApi'
import { donationAmount, summaryDonations } from './helpers';

const AppContainer = styled.div`
  font-family: Circular, Arial, sans-serif;
  color: #666;
`;
const AppTitle = styled.h1`
  text-align: center;
`;
const Message = styled.p`
  color: red;
  margin: 1em 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

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
    const { donate, message } = this.props;
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
    updateTotalDonate: amount => dispatch({ type: 'UPDATE_TOTAL_DONATE', amount }),
    updateMessage: message => dispatch({ type: 'UPDATE_MESSAGE', message })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
