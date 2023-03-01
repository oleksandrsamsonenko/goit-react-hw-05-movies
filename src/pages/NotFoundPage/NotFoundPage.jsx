import style from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
import error from '../../images/psyduck.png';

const NotFoundPage = () => {
  return (
    <>
      <div className={style.notfound}>
        <img
          className={style.errorIMG}
          src={error}
          alt="something went wrong"
        />
        <h2 className={style.text}>
          Oh no! Page what you looking for is removed or was never created
        </h2>
        <Link to="/" className={style.link}>
          <b>anyway, use this link to return at starting page</b>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
