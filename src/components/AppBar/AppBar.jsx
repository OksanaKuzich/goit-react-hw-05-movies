import { Link, NavList, Header, NavItem } from './AppBar.styles';

export const AppBar = () => {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <Header>
      <nav>
        <NavList>
          {navItems.map(({ href, text }) => (
            <NavItem key={href}>
              <Link to={href} key={href}>
                {text}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </nav>
    </Header>
  );
};

