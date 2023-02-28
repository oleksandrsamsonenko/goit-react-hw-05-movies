import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

export const NavBar = () => {
  return (
    <>
      <div className={style.nav}>
        <NavLink className={style.link} to="/">
          Home
        </NavLink>
        <NavLink className={style.link} to="moviespage">
          Movies
        </NavLink>
      </div>
    </>
  );
};
