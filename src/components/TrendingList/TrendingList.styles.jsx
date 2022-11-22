import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
`;

export const MoviesItem = styled.li`
  width: 150px;
  transition: 1s;
  display: flex;
  :hover {
    transform: scale(1.1);
  }
`;

export const MoviesLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${MoviesItem}:hover & {
    color: rgb(255, 127, 80);
  }

  &.active {
    color: coral;
  }
`;

export const MoviesWrapper = styled.div`
  width: 850px;
  margin-left: auto;
  margin-right: auto;
`;

export const Img = styled.img`
  width: 150px;
  height: 225px;
  margin-top: 5px;
`;

export const TitleMovies = styled.h3`
  flex-grow: 1;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: inherit;
`;

export const Loading = styled.div`
  font-style: italic;
  margin-top: 10px;
`