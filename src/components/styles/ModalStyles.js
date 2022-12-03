import styled from 'styled-components';

export const ModalStyle = styled.div`
  background-color: var(--light-gray);
  border: 6px solid var(--gray);
  padding: 24px;
`;

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0 0 0 / 40%);
  display: grid;
  align-items: center;
  justify-content: center;
`;
