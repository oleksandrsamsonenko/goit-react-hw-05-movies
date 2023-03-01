import { getMovies } from 'services/movieAPI';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './HomePage.module.css';

const HomePage = () => {
  const [state, setState] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const { data } = await getMovies();
        // console.log(data);
        setState(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesList();
  }, []);
  // console.log(state);

  const elements = state.map(element => (
    <li className={style.movie} key={element.id}>
      <Link to={`/moviespage/${element.id}`} state={location}>
        <img
          className={style.poster}
          src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          alt={element.title}
        />

        <p className={style.link}>{element.title}</p>
      </Link>
    </li>
  ));
  return (
    <>
      <ul className={style.list}>{elements}</ul>
    </>
  );
};

export default HomePage;
