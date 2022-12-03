import styled from 'styled-components';

export default styled.button`
  background-color: ${(props) => (props.secondary ? 'var(--translucid-gray)' : 'var(--purple)')};

  border: none;
  box-shadow: inset 0 -3px ${(props) => (props.secondary ? 'var(--gray)' : 'var(--deep-purple)')};
  cursor: pointer;
  letter-spacing: 2px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding: 12px;
`;
