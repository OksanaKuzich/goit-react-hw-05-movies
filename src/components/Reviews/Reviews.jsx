import { useFetchById } from 'hooks/useFetchById';
import { fetchMovieReviews } from 'service/api';
import { parseISO, format } from 'date-fns';
import { ReviewsList, ReviewsItem } from './Reviews.styles';
import { NoInfo } from 'components/Cast/Cast.styles';

const Reviews = () => {
  const reviews = useFetchById(fetchMovieReviews);

  const fixFormatDate = str => {
    const date = format(parseISO(str), 'dd.MM.yyyy');
    return date;
  };
  
  return (
    <>
      {reviews && reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(({ author, content, created_at }) => (
            <ReviewsItem key={author}>
              <h3>Author: {author}</h3>
              <p>{fixFormatDate(created_at)}</p>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <NoInfo>~ We don't hane any reviews for this movie ~</NoInfo>
      )}
    </>
  );
};

export default Reviews;
