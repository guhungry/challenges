import React, { Component } from 'react';
import Card from './components/Card';

import { connect } from 'react-redux';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';

import { summaryDonations } from './helpers';

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
        .then(function(resp) { return resp.json(); })
        .then(function(data) {
          self.setState({ charities: data }) });

      fetch('http://localhost:3001/payments')
        .then(function(resp) { return resp.json() })
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
        <div>
          <h1>Tamboon React</h1>
          <p>All donations: {donate}</p>
          <Message>{message}</Message>
          { charities.map(this.renderCharity) }
        </div>
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
        .then(function(resp) { return resp.json(); })
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
