import { Outlet } from 'react-router-dom';

export const MoviesPage = () => {
  return (
    <>
      <div>
        <form action="submit">
          <label htmlFor="">
            <input type="text" />
            <button>Search</button>
          </label>
        </form>
      </div>
      <Outlet />
    </>
  );
};
