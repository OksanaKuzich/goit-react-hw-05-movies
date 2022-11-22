import styled from 'styled-components';

export const Img = styled.img`
width: 100px;
height: 150px;
`;

export const CastList = styled.ul`
width: 900px;
margin: 60px auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(8, 1fr);
`;

export const NoInfo = styled.div`
  margin-top: 20px;
  font-style: italic;
`;