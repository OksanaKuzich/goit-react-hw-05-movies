import { Link } from 'react-router-dom';

export const AppBar = () => {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <>
      {navItems.map(({ href, text }) => (
        <Link to={href} key={href}>
          {text}
        </Link>
      ))}
    </>
  );
};
