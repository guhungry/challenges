import React, { PureComponent } from 'react';

import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.label`
`;

export default class RadioButton extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
  }

  render () {
    const { name, onChange, title } = this.props
    return (
      <Label>
        <input type='radio' name={name} onChange={onChange} /> {title}
      </Label>
    )
  }
}