import { useState, useEffect, useRef } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Outlet,
  NavLink,
} from 'react-router-dom';
import { getMovieByID } from 'services/movieAPI';
import style from './MovieDetails.module.css';

const MovieDetails = () => {
  const [state, setState] = useState({});
  const { movieID } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const refLocation = useRef(location);

  const from =
    `${refLocation.current.state?.pathname}${refLocation.current.state?.search}` ||
    '/';

  //   console.log(`DETAILS LOCATION`, location);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await getMovieByID(movieID);
        const {
          title,
          overview,
          vote_average,
          release_date,
          poster_path,
          genres,
        } = data;
        const genresInfo = genres.map(item => item.name).join(` `);
        const year = new Date(release_date);
        const fullYear = year.getFullYear();
        const rating = Math.ceil(vote_average * 10);
        setState({
          title,
          overview,
          rating,
          fullYear,
          poster_path,
          genresInfo,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieID]);

  const { title, overview, rating, fullYear, poster_path, genresInfo } = state;

  return (
    <>
      <div className={style.info}>
        <img
          className={style.poster}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="450"
        />
        <div className={style.about}>
          <h2>
            {title} ({fullYear})
          </h2>
          <p>User Score: {rating}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresInfo}</p>
          <button
            className={style.button}
            type="button"
            onClick={() => navigate(from)}
          >
            Go back
          </button>
        </div>
      </div>
      <div className={style.moreinfo}>
        <h3>Additional information</h3>
        <li>
          <NavLink className={style.link} to={`cast`}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} to={`reviews`}>
            Reviews
          </NavLink>
        </li>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
