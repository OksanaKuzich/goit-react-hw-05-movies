import styled from 'styled-components';

export const Input = styled.input`
  width: 200px;
  height: 20px;
  margin-right: 10px;
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonSearch = styled.button`
  background-color: coral;
  border-style: none;
  border-radius: 5px;
  height: 25px;
  width: 70px;

  :hover,
  :focus {
    background-color: #fccab8;
    cursor: pointer;
  }
`;
