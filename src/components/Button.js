import React, { PureComponent } from 'react';

import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  border: 1px solid #00f;
  color: #00f;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 6px;
  &:hover {
    color: white;
    background-color: #00f;
  }
`;

export default class Button extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    const { title, onClick } = this.props
    return (
      <Container onClick={onClick}>{title}</Container>
    )
  }
}