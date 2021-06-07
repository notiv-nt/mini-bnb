import styled from 'styled-components';

export const LoginContainer = styled.div`
  margin: 0 auto;
  padding: 0 12px;

  @media (min-width: 374px) {
    width: 350px;
  }
`;

export const Form = styled.form`
  padding-top: 40px;

  @media (min-width: 744px) {
    padding-top: 80px;
  }
`;

export const FormControl = styled.div`
  margin-bottom: 1em;

  input[type='email'],
  input[type='password'],
  button,
  label {
    width: 100%;
    font-size: 19px !important;
    line-height: 24px;
    color: #484848;
    font-weight: 300;
    -webkit-appearance: none;
  }

  input {
    background-color: transparent;
    padding: 11px;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    box-sizing: border-box;
  }

  button {
    background-color: #4fc08d;
    color: #fff;
    cursor: pointer;
    border: #4fc08d;
    border-radius: 4px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;
