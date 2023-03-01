import { useState } from 'react';
import style from './SearchForm.module.css';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState(``);

  const handleInputChange = event => {
    setState(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(state.trim());
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit} action="submit">
        <label>
          <input
            className={style.input}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter movie name..."
            value={state}
          />
        </label>
        <button className={style.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
