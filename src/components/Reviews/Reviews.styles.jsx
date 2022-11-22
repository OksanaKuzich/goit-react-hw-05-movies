import styled from 'styled-components';

export const Img = styled.img`
  width: 100px;
  height: 150px;
`;

export const ReviewsList = styled.ul`
  width: 900px;
  margin: 60px auto;
`;

export const ReviewsItem = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: left;
  box-shadow: 10px 5px 5px 2px rgba(0, 0, 0, 0.3);

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
