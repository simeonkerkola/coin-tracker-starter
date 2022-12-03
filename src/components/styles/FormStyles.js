import styled from 'styled-components';

export default styled.form`
  fieldset {
    display: grid;
    grid-template-columns: minmax(200px, 400px);
    gap: 16px;
    border: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }

  label {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  input {
    background-color: var(--gray);
    box-shadow: inset 0 -3px var(--dark-gray);
    border: none;
    color: white;
    font-size: 16px;
    padding: 12px;

    ::placeholder {
      color: #ffffffaa;
    }
  }

  button {
    justify-self: end;
  }
`;
