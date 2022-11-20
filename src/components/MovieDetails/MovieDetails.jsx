import { useFetchGallery } from 'hooks/useFetchGallery';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const details = useFetchGallery();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(details);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>
      {details && <div>Hi, you do this</div>}
      <Outlet/>
    </>
  );
};
