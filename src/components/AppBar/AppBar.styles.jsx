import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 20px;

  &.active {
    color: coral;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid #a1a1a1;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const NavList = styled.ul`
  display: flex;
  margin: 40px auto 40px 60px;
`;

export const NavItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;
