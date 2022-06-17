import React from 'react';
import './search-style.css';

const Search = ({placeholder, onChangeHandler}) => {
  return (
      <input
       className='search-box' 
       type="search" 
       placeholder={placeholder}
       onChange={onChangeHandler}
      />
  )
}

export default Search;