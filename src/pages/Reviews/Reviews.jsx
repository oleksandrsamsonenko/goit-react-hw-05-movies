import { getReviewsByID } from 'services/movieAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './Reviews.module.css';

const Reviews = () => {
  const { movieID } = useParams();
  //   console.log(movieID);
  const [state, setState] = useState([]);
  useEffect(() => {
    const getReview = async () => {
      try {
        const { data } = await getReviewsByID(movieID);
        // console.log(`RESPONSE`, data.results);
        setState(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
  }, [movieID]);

  //   console.log(`STATE`, state);
  const elements =
    state.length !== 0 ? (
      state.map((element, index) => {
        return (
          <li key={index}>
            <p>
              <b>Author: </b>
              {element.author}
            </p>
            <p>
              <b></b>
            </p>
            <p>{element.content}</p>
          </li>
        );
      })
    ) : (
      <p>Sorry, no reviews for this movie so far</p>
    );
  return (
    <>
      <ul className={style.list}>{elements}</ul>
    </>
  );
};

export default Reviews;
