import React, { PureComponent } from 'react';

import Colors from '../styles/Colors'

import styled from 'styled-components'
import PropTypes from 'prop-types'
import { noop } from '../helpers'

const Container = styled.div`
  border: 1px solid ${Colors.blueOmise};
  color: ${Colors.blueOmise};
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 6px;
  &:not([disabled]):hover {
    color: white;
    background-color: ${Colors.blueOmise};
  }
  &[disabled] {
    cursor: not-allowed;
  }
`;

export default class Button extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    title: PropTypes.string,
    onClick: PropTypes.func
  }
  static defaultProps = {
    disabled: false
  }

  render () {
    const { title, onClick, disabled } = this.props

    return <Container disabled={disabled} onClick={disabled ? noop : onClick}>{title}</Container>
  }
}