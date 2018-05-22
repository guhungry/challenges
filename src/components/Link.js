import React, { PureComponent } from 'react';

import Colors from '../styles/Colors'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  cursor: pointer;
  &:hover {
    color: ${Colors.blueOmise};
  }
`;

export default class Link extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    const { className, title, onClick } = this.props

    return <Container className={className} onClick={onClick}>{title}</Container>
  }
}