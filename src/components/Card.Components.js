import styled from 'styled-components'

export const Container = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  position: relative;
`;
export const BackgroundImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  padding-bottom: ${100*(3/4)}%;
`;
export const ContainerInfo = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
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
`;
export const ButtonClose = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
`;