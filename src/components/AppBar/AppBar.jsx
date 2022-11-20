import { Link } from 'react-router-dom';

export const AppBar = () => {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <nav>
      <ul>
        {navItems.map(({ href, text }) => (
          <li key={href}>
            <Link to={href} key={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
