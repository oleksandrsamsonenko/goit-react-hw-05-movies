import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from 'services/movieAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import style from '../HomePage/HomePage.module.css';

const MoviesPage = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const getResults = async () => {
      try {
        const { data } = await getMovieBySearch(search);
        setState(data.results);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    if (search) {
      getResults();
    }
  }, [search]);

  const getSearchValue = search => {
    if (search) {
      setSearchParams({ search });
    }
  };

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
      <SearchForm onSubmit={getSearchValue} />
      {error ? (
        <p className={style.error}>
          {error} <br />
          Something gone wrong, try again later...
        </p>
      ) : (
        <ul className={style.list}>{elements}</ul>
      )}
    </>
  );
};

export default MoviesPage;
