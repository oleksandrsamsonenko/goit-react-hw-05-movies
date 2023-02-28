import { getMovies } from 'services/movieAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './HomePage.module.css';

export const HomePage = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const { data } = await getMovies();
        console.log(data);
        setState(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesList();
  }, []);
  console.log(state);

  const elements = state.map(element => (
    <li className={style.movie} key={element.id}>
      <Link to={`/moviespage/${element.id}`}>
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
