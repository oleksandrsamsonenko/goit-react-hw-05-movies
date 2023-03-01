import { getCastByID } from 'services/movieAPI';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './Cast.module.css';
import placeholder from '../../images/placeholder.jpg';

const Cast = () => {
  const [state, setState] = useState([]);
  const { movieID } = useParams();
  useEffect(() => {
    const getCastInfo = async () => {
      try {
        const response = await getCastByID(movieID);
        // console.log(response.data.cast);
        setState(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCastInfo();
  }, [movieID]);

  const elements = state.map(element => {
    const imgLink = element.profile_path
      ? `https://image.tmdb.org/t/p/w500${element.profile_path}`
      : placeholder;
    return (
      <li className={style.item} key={element.credit_id}>
        <img className={style.photo} src={imgLink} alt={element.name} />
        <p className={style.text}>
          <b>{element.name}</b>
        </p>
        <p className={style.text}>{element.character}</p>
      </li>
    );
  });
  return <ul className={style.castlist}>{elements}</ul>;
};

export default Cast;
