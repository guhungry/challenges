import Link from './Link'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px;
  position: relative;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 3px 10px 1px #ccc;
  overflow: hidden;
`;
export const BackgroundImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  padding-bottom: ${100*(248/580)}%;
`;
export const ContainerInfo = styled.div`
  display: flex;
  height: 60px;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    height: 80px;
    padding: 0 26px;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fffe;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideLeftIn .3s;
`;
export const ButtonClose = styled(Link)`
  position: absolute;
  padding: 5px;
  right: 10px;
  top: 10px;
`;
export const ContainerPopup = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerOption = styled.div`
  margin: 15px 0 10px;
`;
