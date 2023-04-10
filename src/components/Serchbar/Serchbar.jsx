import PropTypes from 'prop-types';
import { useState } from 'react'
import css from './Serchbar.module.css'

export default function Search ({ handleSerch }) {
  const [value, setValue] = useState('');
  
  const handleChange = ({ target: { value } }) => {
    setValue( value )
	}

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSerch(value)
    }
 
    return (
      <div className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_text}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            onChange={handleChange}
            value={value}
          />
        </form>
      </div>
    )
}

Search.propTypes = {
  handleSerch: PropTypes.func,
}