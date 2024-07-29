import React from 'react';
const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Items</label>
        <input type="text" id='search' 
        placeholder='Search Items' required value={search} 
        onChange={(e)=> setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchItem