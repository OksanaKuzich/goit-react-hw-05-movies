import { Link } from 'react-router-dom';

export const TrendingList = ({ gallery, location }) => {
  console.log(gallery);
  return (
    <ul>
      {gallery.map(({ id, name, title }) => {
        return (
          <li key={id}>
            <Link to={id.toString()} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
