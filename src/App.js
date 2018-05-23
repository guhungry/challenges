import React, { Component } from 'react';
import Card from './components/Card';
import ResponsiveContainer from './components/ResponsiveContainer';
import ResponsiveRow from './components/ResponsiveRow';

import { connect } from 'react-redux';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';

import { responseToJson, summaryDonations } from './helpers';

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

export default connect((state) => state)(
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        charities: [],
        selectedAmount: 10,
      };
    }

    // ///////////////////
    // Lifecycle Functions
    // ///////////////////
    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(responseToJson)
        .then(function(data) {
          self.setState({ charities: data }) });

      fetch('http://localhost:3001/payments')
        .then(responseToJson)
        .then(function(data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => (item.amount || 0))),
          });
        })
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
      fetch('http://localhost:3001/payments', {
        method: 'POST',
        body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(responseToJson)
        .then(() => {
          this.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount,
          });
          this.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: `Thanks for donate ${amount}!`,
          });

          setTimeout(() => {
            this.props.dispatch({
              type: 'UPDATE_MESSAGE',
              message: '',
            });
          }, 2000);
        });
    }
  }
);
