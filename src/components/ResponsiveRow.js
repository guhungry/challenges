import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${({gutterWidth}) => gutterWidth && `
    margin: 0 -${gutterWidth};
  `}
`;