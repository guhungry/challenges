import styled from 'styled-components'

export default styled.div`
  ${({sizeXs}) => sizeXs && `
    width: ${sizeXs * 100 / 12}%;
  `}
  ${({sizeSm}) => sizeSm && `
    @media (min-width: 768px) {
      width: ${sizeSm * 100 / 12}%;
    }
  `}
  ${({sizeMd}) => sizeMd && `
    @media (min-width: 992px) {
      width: ${sizeMd * 100 / 12}%;
    }
  `}
  ${({sizeLg}) => sizeLg && `
    @media (min-width: 1200px) {
      width: ${sizeLg * 100 / 12}%;
    }
  `}
`;