import styled from 'styled-components';

export default styled.section`
  margin: 32px 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .account {
    display: flex;
    align-items: baseline;
  }

  .address {
    margin-left: 8px;
  }

  .balance {
    margin-left: auto;

    @media (max-width: 768px) {
      margin-top: 8px;
      margin-left: 0;
    }
  }
`;
